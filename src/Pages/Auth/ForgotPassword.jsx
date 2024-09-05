import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForgetPassMutation } from "../../redux/apislices/AuthSlices";
import { setToLocalStorage } from "../../Util/local-storage";


const ForgotPassword = () => { 
  const [forgetPass ,{isSuccess ,isError ,error ,data}] = useForgetPassMutation() 
  const [email , setEmail] = useState()
  const navigate = useNavigate(); 

  useEffect(() => {
    if (isSuccess) {
      // console.log("you login successfully");
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          setToLocalStorage("email", email)      
          navigate("/otp")    
          window.location.reload(); 
        });
      }
    }
    if (isError) {
      Swal.fire({
        text: error?.data?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, navigate]);  

  const onFinish = async(values) => {   
    setEmail(values?.email)
    await forgetPass(values).then((res)=>{
      console.log(res);
    })
    
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
