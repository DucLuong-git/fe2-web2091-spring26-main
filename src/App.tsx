import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"
import { Button } from "antd";
import { Layout } from "antd";
import { Form, Input } from 'antd'
function App() {
  const { Header, Content, Footer } = Layout;
  const onFinish = (values: any) => {
    console.log(values);
  };
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
            <Link to="/list" className="hover:text-gray-200">
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
        <Button type="primary">click me</Button>
        <Button type="default">click me</Button>
        <Button type="dashed">click me</Button>
        <Button type="link">click me</Button>
        <Button type="text">click me</Button>

      </div>
      <div className=" flex flex-col justify-center">
      <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>
        <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
      <Toaster />
    </>
  );
}

export default App;
