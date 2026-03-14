import React from 'react'
import { Form, Input, Button, Modal, Select } from 'antd'
import { useState } from 'react';

function Lab3() {
    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const [Field, setField] = useState(false)
    function onFinish(values: any): void {
        console.log('Form submitted:', values);
    }
    const [product, setProduct] = useState(false)
    function onFinishProduct(values: any): void {
        setProductData([...productData, values])
    }
    const [productData, setProductData] = useState<any[]>([])
    return (
        <div>
            <div>
                <Button style={{ marginTop: '10px' }} onClick={() => setOpenLogin(true)}>Đăng nhập</Button>
            </div>
            <Modal
                open={openLogin}
                onCancel={() => setOpenLogin(false)}
                onOk={() => setOpenLogin(false)}
            >
                <h1>form đăng nhập</h1>
                <Form layout="vertical" style={{ maxWidth: 400 }}>
                    <Form.Item label="email" name='email'
                        rules={[
                            { required: true, message: "vui lòng nhập email" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="password" name='password'
                        rules={[
                            { required: true, message: "vui lòng nhập password" },
                        ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div>
                <Button style={{ marginTop: '10px' }} onClick={() => setOpenRegister(true)}>Đăng ký</Button>
            </div>
            <Modal
                open={openRegister}
                onCancel={() => setOpenRegister(false)}
                onOk={() => setOpenRegister(false)}
            >
                <h1>form đăng kí</h1>
                <Form layout="vertical" style={{ maxWidth: 400 }}>
                    <Form.Item label="name" name='name'
                        rules={[
                            { required: true, message: "vui lòng nhập name" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="email" name='email'
                        rules={[
                            { required: true, message: "vui lòng nhập email" },
                            { type: 'email', message: "email không hợp lệ" }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="phone" name='phone'
                        rules={[
                            { required: true, message: "vui lòng nhập phone" },
                            {
                                pattern: /^0\d{9}$/,
                                message: "Số điện thoại phải có 10 số và bắt đầu bằng 0",
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="password" name='password'
                        rules={[
                            { required: true, message: "vui lòng nhập password" },
                            { min: 6, message: "phải lớn hơn 6 kí tự" }
                        ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="ConfirmPassword" name='ConfirmPassword'
                        rules={[
                            { required: true, message: "vui lòng nhập password" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error("password không trùng khớp"))
                                }
                            })
                        ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            đăng kí
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div>
                <Button style={{ marginTop: '10px' }} onClick={() => setField(true)}>Field</Button>
            </div>
            <Modal
                open={Field}
                onCancel={() => setField(false)}
                onOk={() => setField(false)}
            >
                <h1>Field</h1>
                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                    <Form.Item label="name" name='name'
                        rules={[
                            { required: true, message: "vui lòng nhập tên sản phẩm" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="price" name='price'
                        rules={[
                            { required: true, message: "vui lòng nhập tên giá phẩm" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="quantity" name='quantity'
                        rules={[
                            { required: true, message: "vui lòng nhập số lượng sản phẩm" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="description" name='description'
                        rules={[
                            { required: true, message: "vui lòng nhập description" },
                        ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div>
                <Button style={{ marginTop: '10px' }} onClick={() => setProduct(true)}>product</Button>
            </div>
            <Modal
                open={product}
                onCancel={() => setProduct(false)}
                onOk={() => setProduct(false)}
            >
                <h1>Field</h1>
                <Form layout="vertical" onFinish={onFinishProduct} style={{ maxWidth: 400 }}>
                    <Form.Item label="Title" name='Title'
                        rules={[
                            { required: true, message: "vui lòng nhập Title" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Category " name='Category '
                        rules={[
                            { required: true, message: "vui lòng chọn Category" },
                        ]}>
                        <Select style={{ width: 200 }}
                            placeholder="Chọn danh mục"
                            options={[
                                { value: "tech", label: "Tech" },
                                { value: "news", label: "News" },
                                { value: "tutorial", label: "Tutorial" }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Slug" name='Slug'
                        rules={[
                            { required: true, message: "vui lòng nhập Slug" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Content" name='Content'
                        rules={[
                            { required: true, message: "vui lòng nhập Content" },
                        ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="image" name='image'
                        rules={[
                            { required: true, message: "vui lòng nhập image" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            {productData.map((item, index) => (
                <div key={index} style={{ border: "1px solid gray", marginTop: 10, padding: 10 }}>
                    <p><b>Title:</b> {item.Title}</p>
                    <p><b>Category:</b> {item.Category}</p>
                    <p><b>Slug:</b> {item.Slug}</p>
                    <p><b>Content:</b> {item.Content}</p>
                    <p><b>Image:</b> <img src={item.image} alt="" width={80} height={60} /></p>
                </div>
            ))}
        </div>
    )
}

export default Lab3