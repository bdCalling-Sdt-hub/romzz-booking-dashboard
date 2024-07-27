import { Button } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");

  const handleResendEmail = () => {
    const email = JSON.parse(localStorage.getItem("email"));
  };
  const handleVerifyOtp = () => {
    Swal.fire({
      title: "Password Reset",
      text: "Your password has been successfully reset. click confirm to set a new password",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#F27405",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/update-password");
      }
    });
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
            width: "380px",
            color: "#5C5C5C",
            margin: "0 auto 0 auto",
          }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#545454" }}> contact@dscode...com </span>
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
            onChange={setOtp}
            numInputs={5}
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
