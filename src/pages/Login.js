import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Card, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // Simulating login process
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", true);
      setLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh", backgroundColor: "#f7f7f7" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card
          bordered={false}
          style={{
            padding: "40px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Title level={2} style={{ marginBottom: "20px", fontWeight: "bold" }}>
              Login to Your Account
            </Title>
            <Form
              name="login"
              onFinish={onFinish}
              initialValues={{ remember: true }}
              layout="vertical"
              size="large"
            >
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  style={{
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  style={{
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#4caf50",
                    borderColor: "#4caf50",
                  }}
                >
                  Login
                </Button>
              </Form.Item>
              <Space direction="vertical" size={10}>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    type="link"
                    onClick={() => navigate("/signup")}
                    style={{ padding: "0" }}
                  >
                    Don't have an account? Sign Up
                  </Button>
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    type="link"
                    onClick={() => navigate("/forgot-password")}
                    style={{ padding: "0" }}
                  >
                    Forgot your password?
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
