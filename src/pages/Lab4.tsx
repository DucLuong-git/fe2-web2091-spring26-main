import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Checkbox, Layout, Select } from "antd";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import toast from "react-hot-toast";
interface Category {
    id: number;
    title: string;
}
interface Stories{
    title:string;
    description:string;
    author:string;
    Active?:Boolean;
    categoryId: number;
}

export default function StoryForm(){
    const {mutate, isPending}=useMutation({
        mutationFn: async(value:Stories)=>{
            await axios.post("http://localhost:3000/stories",value)
        },
        onSuccess:()=>{
            toast.success("story true")
        },
        onError:()=>{
            toast.error("story false")
        }
    })
    const { data: categories, isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
        const res = await axios.get("http://localhost:3000/stories");
        return res.data;
    }
    })
    const onFinish =(value:Stories)=>{
        mutate(value)
    }
    const { Header, Content, Footer } = Layout;
    return (
        <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/StoryList" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
      <div>
      <Layout>
      <Header style={{ color: "white" }}>Header</Header>
        <Content style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center" }}>Form</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Form 
                    layout="vertical" 
                    style={{ width: 400 }} 
                    onFinish={onFinish}
                >
                    <Form.Item label="title" name='title'
                        rules={[{ required: true, message: "vui lòng nhập title" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="description" name='description'
                        rules={[{ required: true, message: "vui lòng nhập Description" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="author" name='author'
                        rules={[{ required: true, message: "vui lòng nhập author" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="image" name='image'
                        rules={[{ required: true, message: "vui lòng nhập image" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        label="Danh mục" 
                        name="categoryId"
                        rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
                    >
                        <Select
                            loading={isLoading}
                            placeholder="Chọn danh mục"
                            options={categories?.map((item: Category) => ({
                                label: item.title,
                                value: item.id
                            }))}
                        />
                    </Form.Item>

                    <Form.Item label="Active" name='Active' valuePropName="checked">
                        <Checkbox/>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' loading={isPending}>
                            {isPending ? "Đang gửi" : "Đăng"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
      <Toaster />

            </>
    )
}
