import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useResetPassMutation } from "../../redux/apislices/AuthSlices";
import { getFromLocalStorage } from "../../Util/local-storage";

const UpdatePassword = () => { 
  const [resetPass ,{isError ,isSuccess ,data ,error}] = useResetPassMutation() 
  const email = getFromLocalStorage("email") 
 
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
        navigate("/login")
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

  const onFinish =async(values) => { 
  const value ={
    email:email , 
    newPassword:values?.newPassword
  } 
  console.log(value);
await resetPass(value).then((res)=>console.log(res))

  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#8AC5D2",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        }}
        onFinish={onFinish} 
        layout="vertical"
      >
        <h1
          style={{
            fontSize: "32px",
            color: "black",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Set a new password
        </h1>
        <p
          style={{
            width: "350px",
            color: "#5C5C5C",
            fontSize: "14px",
            fontWeight: 400,
            margin: "0 auto 0 auto",
            textAlign: "center",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <div>
           
            <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
            style={{ marginBottom: "15px", marginTop: "20px" }}
            label={
              <p style={{display: "block", color:"#6A6D7C",  fontSize:"17px" }} htmlFor="">New Password</p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>
        </div>
    
        <div style={{marginBottom: "40px"}}>
          
            <Form.Item
            name="confirmPassword"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            style={{ marginBottom: "15px" }}
            label={
              <p style={{display: "block", color:"#6A6D7C", fontSize:"17px"}} htmlFor="email">Confirm Password</p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>

        </div> 

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "51px",
              background: "#00809E",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              marginTop: "",
            }}
          >
            UPDATE PASSWORD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePassword;
