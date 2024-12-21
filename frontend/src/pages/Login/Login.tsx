import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const RestaurantLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Handle login form submission
  const handleLogin = (values: { username: string; password: string }) => {
    console.log("Login Values: ", values);
    setLoading(true);

    // Simulate a login API call
    setTimeout(() => {
      setLoading(false);
      message.success("Login successful! Welcome to the restaurant dashboard.");
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20 }}>
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: 24 }}>
        Restaurant Staff Login
      </h2>
      <Form
        name="restaurant-login"
        layout="vertical"
        onFinish={handleLogin}
        initialValues={{ remember: true }}
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", padding: 20, borderRadius: 8 }}
      >
        {/* Username Field */}
        <Form.Item
          label="Staff Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input 
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,0.25)" }} />} 
            placeholder="Enter your staff username" 
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password 
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,0.25)" }} />} 
            placeholder="Enter your password" 
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            style={{
              backgroundColor: "#FF5733",
              borderColor: "#FF5733",
              height: "40px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RestaurantLogin;
