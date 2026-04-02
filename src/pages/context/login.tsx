import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const res = await axios.post("http://localhost:3000/login", values);
      return res.data;
    },
    onSuccess: (data) => {
      setAuth({
        user: data.user,
        token: data.token,
      });
      navigate("/");
    },
  });

  const onFinish = (values: { email: string; password: string }) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 300, margin: "50px auto" }}>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Nhập email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Nhập password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
