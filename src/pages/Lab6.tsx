import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

interface Stories {
  title: string;
  description: string;
  author: string;
  image: string;
  Active?: boolean;
  categoryId: number;
}

export default function EditStory() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const nav = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const mutation = useMutation({
    mutationFn: async (value: Stories) => {
      await axios.put(`http://localhost:3000/stories/${id}`, value);
    },
    onSuccess: () => {
      alert("Sửa thành công");
      queryClient.invalidateQueries({ queryKey: ["story", id] });
      queryClient.invalidateQueries({ queryKey: ["getAll"] });
      nav("/");
    },
    onError: () => {
      alert("Sửa thất bại");
    },
  });

  const onFinish = (values: Stories) => {
    mutation.mutate(values);
  };

  const { isPending } = mutation;

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: 40 }}>Sửa truyện</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form
          form={form}
          layout="vertical"
          style={{ width: 400 }}
          onFinish={onFinish}
          disabled={isLoading}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="author" label="Author" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          

          <Form.Item name="Active" valuePropName="checked">
            <Checkbox>Active</Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={isPending}>
            {isPending ? "đang sửa" : "sửa"}
          </Button>
        </Form>
      </div>
    </>
  );
}
