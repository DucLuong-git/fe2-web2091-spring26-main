import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (values: {
      username: string;
      email: string;
      password: string;
    }) => {
      const res = await axios.post(
        "http://localhost:3000/register",
        values
      );
      return res.data;
    },
    onSuccess: () => {
      alert("Đăng ký thành công!");
      navigate("/login");
    },
  });

  return (
    <div style={{ maxWidth: 300, margin: "50px auto" }}>
      <h2>Register</h2>

      <Form layout="vertical" onFinish={(values) => mutation.mutate(values)}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;