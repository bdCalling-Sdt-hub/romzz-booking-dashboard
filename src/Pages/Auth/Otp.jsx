import { Button } from "antd";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForgetPassMutation, useSendOtpMutation } from "../../redux/apislices/AuthSlices";
import { getFromLocalStorage, setToLocalStorage } from "../../Util/local-storage";

const Otp = () => {
  const navigate = useNavigate(); 
  const [sendOtp , {isSuccess , isError ,data ,error}] = useSendOtpMutation() 
  const [forgetPass] = useForgetPassMutation()
  const [otp, setOtp] = useState(null);   
  console.log(otp);
  const email = getFromLocalStorage("email")  
 
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
          setToLocalStorage("resetToken", data?.data?.accessToken);  
          navigate("/update-password");  
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


  const handleResendEmail = async() => {   
    const values = {email:email}
    await forgetPass(values).then((res)=>{console.log(res) 
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          })
    }else{
        Swal.fire({
            title: "Oops",
            text: res?.error?.data?.message,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
      
    }
    })
  };
  const handleVerifyOtp = async() => {  
 
    const verificationType = "passwordReset"
    const values = {
      email:email ,
      otp:otp , 
      verificationType:verificationType
    }  
    console.log(values);

    await sendOtp(values).then((res)=>{
      console.log(res);
    })

  };

  return (
    <div
      // className="bgImg"
      style={{
        width: "100%",
        backgroundColor: "#8AC5D2",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className=" "
        style={{
          width: "630px",
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "90px 57px",
        }}
      >
        <h1
          className="font-semibold"
          style={{
            fontSize: "32px",
            color: "black",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Verification code
        </h1>
        <p
          style={{
            width: "450px",
            color: "#5C5C5C",
            margin: "0 auto 0 auto",
          }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#545454" , fontWeight:600 }}> {email} </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <OTPInput
            value={otp}
            onChange={(otp)=>setOtp(Number(otp))}
            numInputs={6}
            inputStyle={{
              height: "50px",
              width: "50px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#2B2A2A",
              outline: "none",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          onClick={handleVerifyOtp}
          block
          htmlType="submit"
          style={{
            height: "52px",
            fontWeight: "400px",
            fontSize: "18px",
            color: "white",
            background: "#00809E",
            marginTop: "30px",
            border: "none",
            outline: "none",
            marginBottom: "20px",
          }}
        >
          Verify
        </Button>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Didn’t receive code?
          <p
            onClick={handleResendEmail}
            style={{
              color: "#FF4200",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Otp;
