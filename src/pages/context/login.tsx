import { useContext } from "react";
import { Form, Input, Button } from "antd";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const onFinish = (values: { name: string; avatar: string }) => {
    if (context) {
      context.setUser({
        name: values.name,
        avatar: values.avatar || "https://i.pravatar.cc/40"
      });
      navigate("/dashboard");
    }
  };
  return (
    <div style={{ maxWidth: 300, margin: "50px auto" }}>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
        >
          <Input placeholder="Nhập tên" />
        </Form.Item>

        <Form.Item label="Avatar URL" name="avatar">
          <Input placeholder="Nhập link avatar (tùy chọn)" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
