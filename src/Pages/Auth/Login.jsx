import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  return (
    <div
      className="   "
      style={{
        backgroundColor: "#8AC5D2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Form
        name="normal_login"
        className="  bg-white/20"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "630px",

          borderRadius: "12px",
          padding: "90px 57px",
          position: "relative",
          zIndex: 100,
          backgroundColor: "white",
        }}
        onFinish={onFinish}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "black",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Login in to Account
        </h1>
        <p className="text-lg py-6 text-center">
          Please enter your email and password to continue
        </p>
        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            {" "}
            Email{" "}
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="password"
          >
            Password
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "black", fontSize: "16px" }}>
              Remember me
            </Checkbox>
          </Form.Item>
          <a
            className="login-form-forgot"
            style={{ color: "#00809E", fontWeight: "bold", fontSize: "16px" }}
            href="/forgot-password"
          >
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            onClick={() => navigate("/")}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            style={{
              height: "52px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#00809E",
              marginTop: "56px",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
