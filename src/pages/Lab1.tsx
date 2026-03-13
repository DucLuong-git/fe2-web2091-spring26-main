import React, { useState } from 'react'
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"
import { Button } from "antd";
import { Layout, Modal } from "antd";
import { Form, Input, Table } from 'antd'
import axios from 'axios'

function Lab1() {
    const { Header, Content, Footer, Sider } = Layout;
    
    const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "email", dataIndex: "email" },
  { title: "role", dataIndex: "role" },
];

const data = [
  { key: 1, name: "luong", email: "vuan@gmail.com", role:"hahaha" },
  { key: 2, name: "nam", email: "anhag@gmail.com", role: "okok" }, 
];
const [open,setOpen]=useState(false)
  function onFinish(values: any): void {
    console.log('Form submitted:', values);
  }

  return (
    <div>
        <Layout style={{ minHeight: "100vh" }}>
      
      <Sider style={{ background: "#001529", color: "white", padding: 20 }}>
        Sidebar
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#1677ff",
            color: "white",
            textAlign: "center",
          }}
        >
          Header
        </Header>

        <Content
          style={{
            margin: 20,
            padding: 20,
            background: "#f0f2f5",
            border: "1px solid #ccc",
          }}
        >
          <div className='flex flex-col'>
            <Form onFinish={onFinish}>
                <Form.Item
                name="name"
                rules={[{ required: true, message: "Nhập name" }]}
                >
                    <Input placeholder='name'/>
                </Form.Item>
                <Form.Item
                name="email"
                rules={[{ required: true, message: "Nhập email" }]}
                >
                    <Input placeholder='email'/>
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: "Nhập password" }]}
                >
                    <Input placeholder='password'/>
                </Form.Item>
                <Button htmlType="submit" type='primary'>click me</Button>
            </Form>

            
          </div>
          <h2>danh sách</h2>
          <Table columns={columns} dataSource={data}>
            
          </Table>
          <Button onClick={() => setOpen(true)}>Open</Button>

            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => setOpen(false)}
            >
                <h1>thêm user</h1>
                <Form onFinish={onFinish}>
                <Form.Item
                name="name"
                rules={[{ required: true, message: "Nhập name" }]}
                >
                    <Input placeholder='name'/>
                </Form.Item>
                <Form.Item
                name="email"
                rules={[{ required: true, message: "Nhập email" }]}
                >
                    <Input placeholder='email'/>
                </Form.Item>
                <Button htmlType="submit" type='primary'>thêm</Button>
            </Form>
            
            
            </Modal>
        </Content>
      </Layout>
        
    </Layout>
    <Toaster/>
    </div>
  )
}

export default Lab1