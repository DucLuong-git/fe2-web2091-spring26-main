import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  Table, Tag, Image,
  Button, Popconfirm, message,
  Form, Input, Checkbox, Select
} from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import EditStory from "./Lab6";
import { Route } from "react-router-dom";
<Route path="/edit/:id" element={<EditStory />} />
interface Story {
  id: number;
  title: string;
  description: string;
  author: string;
  image?: string;
  Active: boolean;
  categoryId?: number;
}

interface Category {
  id: number;
  title: string;
}

interface Stories {
  title: string;
  description: string;
  author: string;
  image: string;
  Active?: boolean;
  categoryId: number;
}

export function StoryList() {
  const queryClient = useQueryClient();
  const { data } = useQuery<Story[]>({
    queryKey: ['getAll'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/stories');
      return res.data;
    },
    staleTime: 0,
  });
  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/categories');
      return res.data;
    }
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (value: Stories) => {
      await axios.post("http://localhost:3000/stories", value);
    },
    onSuccess: () => {
      toast.success("Thêm thành công");
      queryClient.invalidateQueries({ queryKey: ['getAll'] });
    },
    onError: () => {
      toast.error("Thêm thất bại");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      message.success("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: ['getAll'] });
    },
    onError: () => {
      message.error("Xóa thất bại");
    }
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const onFinish = (value: Stories) => {
    mutate(value);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên truyện',
      dataIndex: 'title',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: 'Tác giả',
      dataIndex: 'author',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      render: (img: string) =>
        img ? <Image src={img} width={60} /> : "No image",
    },
    {
      title: 'Trạng thái',
      dataIndex: 'Active',
      render: (active: boolean) =>
        active ? <Tag color="green">Hiển thị</Tag> : <Tag color="red">Ẩn</Tag>,
    },
    {
      title: "Action",
      render: (_: any, record: Story) => (
        <>
        <Link to={`/edit/${record.id}`} className="btn-btn-primary">
        sửa
        </Link>
        <Popconfirm
          title="Bạn có chắc muốn xóa"
          onConfirm={() => handleDelete(record.id)}
        >
          <Button danger loading={deleteMutation.isPending}>
            Xóa
          </Button>
        </Popconfirm>
        </>
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>

      <h2 style={{ textAlign: "center" }}>Danh sách truyện</h2>
      <Table
        columns={columns}
        dataSource={data || []}
        rowKey="id"
        bordered
      />
      <h2 style={{ textAlign: "center", marginTop: 40 }}>Thêm truyện</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form layout="vertical" style={{ width: 400 }} onFinish={onFinish}>

          <Form.Item name='title' label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='description' label="Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='author' label="Author" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='image' label="Image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name='categoryId' label="Danh mục" rules={[{ required: true }]}>
            <Select
              placeholder="Chọn danh mục"
              options={categories?.map(item => ({
                label: item.title,
                value: item.id
              }))}
            />
          </Form.Item>

          <Form.Item name='Active' valuePropName="checked">
            <Checkbox>Active</Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={isPending}>
            {isPending ? "Đang gửi" : "Thêm"}
          </Button>

        </Form>
      </div>
    </div>
  );
}