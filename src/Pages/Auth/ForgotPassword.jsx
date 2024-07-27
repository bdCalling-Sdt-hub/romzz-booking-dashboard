import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email));
    console.log("Received values of form: ", values.email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Send OTP ",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/otp");
    });
  };
  return (
    <div
      className="   "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#8AC5D2",
        height: "100vh",
      }}
    >
      <Form
        name="normal_login"
        className=""
        initialValues={{
          remember: true,
        }}
        style={{
          width: "630px",
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "90px 57px",
          position: "relative",
          zIndex: 100,
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
          Forgot password ?
        </h1>

        <div className=" mb-[24px] mt-[28px]">
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

        <Form.Item>
          <Button
            onClick={() => navigate("/otp")}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            style={{
              height: "52px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#00809E",
              marginTop: "36px",
            }}
          >
            Send Code
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
