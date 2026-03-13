import React, { useState } from 'react'
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"
import { Button, Tag, Space } from "antd";
import { Layout, Modal } from "antd";
import { Form, Input, Table } from 'antd'
import axios from 'axios'

function Lab2() {
  const { Header, Content, Footer, Sider } = Layout;
  const columns1 = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  const data1 = [
    { key: 1, id: "SV01", name: "luong", age: 19, major: "Web Programming" },
    { key: 2, id: "SV02", name: "nam", age: 20, major: "Logistics" },
  ];

  const columns2 = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "productName" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];
  const data2 = [
    { key: 1, id: "SP01", productName: "Laptop", price: "15.000.000", category: "Điện tử" },
    { key: 2, id: "SP02", productName: "Chuột", price: "300.000", category: "Phụ kiện" },
    { key: 3, id: "SP03", productName: "Bàn phím", price: "500.000", category: "Phụ kiện" },
    { key: 4, id: "SP04", productName: "Màn hình", price: "3.000.000", category: "Điện tử" },
  ];

  const columns3 = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { 
      title: "Status", 
      dataIndex: "status",
      render: (status: any) => (
        <span style={{ color: status === 'active' ? 'green' : 'red', fontWeight: 'bold' }}>
            {status}
        </span>
      )
    },
    { 
      title: "Action", 
      render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button type="primary">Edit</Button>
            <Button danger>Delete</Button>
        </div>
      ) 
    },
  ];

  const data3 = [
    { key: 1, id: "U01", name: "luong", email: "vuan@gmail.com", status: "active" },
    { key: 2, id: "U02", name: "nam", email: "anhag@gmail.com", status: "inactive" },
  ];
  const [open, setOpen] = useState(false)
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
            <div className='flex flex-col' style={{ gap: '30px' }}>

              <div>
                  <h2>Bài 1: Bảng Sinh Viên</h2>
                  <Table columns={columns1} dataSource={data1} pagination={false} />
              </div>
              <div>
                  <h2>Bài 2: Bảng Sản Phẩm</h2>
                  <Table columns={columns2} dataSource={data2} pagination={{ pageSize: 3 }} />
              </div>
              <div>
                  <h2>Bài 3: Bảng User</h2>
                  <Table columns={columns3} dataSource={data3} pagination={false} />
                  <Button style={{ marginTop: '10px' }} onClick={() => setOpen(true)}>Open Modal Thêm User</Button>
              </div>

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

            </div>
          </Content>
        </Layout>
        
      </Layout>
      <Toaster/>
    </div>
  )
}

export default Lab2