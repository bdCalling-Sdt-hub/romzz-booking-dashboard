import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { useChangePassMutation, useGetProfileQuery, useUpdateProfileMutation } from "../../redux/apislices/AuthSlices";
import { imageUrl } from "../../redux/api/apiSlice";

const AdminProfile = () => {
  const [isEdit, setIsEdit] = useState(false); 
  const {data:AdminInfo} = useGetProfileQuery()   
  const [updateProfile ,{isSuccess ,isError ,data:Profile ,error}] = useUpdateProfileMutation() 
  const [changePass , {isError:isErr , isSuccess:isSucc , error:err , data:changepass}] = useChangePassMutation()
  console.log(AdminInfo);  

  const [imgFile, setImgFile] = useState(""); 
  const [imgUrl , setImgUrl] = useState(null)  
  console.log(imgFile);
  const user  = AdminInfo?.data  


  //  profile update message 
  useEffect(() => {
    if (isSuccess) {
      if (Profile) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: Profile?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {   
          window.location.reload(); 
        });
      }

    }
    if (isError) {
      Swal.fire({
        text: error?.Profile?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, Profile]);   
  
  //  password update message 
  useEffect(() => {
    if (isSucc) {
      if (changepass) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: changepass?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {   
          window.location.reload(); 
        });
      }

    }
    if (isErr) {
      Swal.fire({
        text: err?.data?.message,  
        icon: "error",
      });
    }
  }, [isSucc, isErr, err, changepass]);   

  const onFinish =async(values)=>{   
    const formData = new FormData()    
    const data  ={
      fullName:values?.fullName
    }
    if(imgFile){
      formData.append("avatar",imgFile)
    } 
  formData.append("data" ,JSON.stringify(data))  

  await updateProfile(formData).then((res)=>{
    // console.log(res);
  })
  } 

  const handleChangePassword =async(values)=>{
 console.log(values);  

 await changePass(values).then((res)=>{
  console.log(res); 

 })
  }

  const onImageChange = (event) => { 
    const file = event.target.files[0]
 setImgFile(file)
 setImgUrl(URL.createObjectURL(file));
  }; 

  const src = imgUrl ? imgUrl : user?.avatar?.startsWith("https") ? user?.avatar : `${imageUrl}${user?.avatar}`



  return (
    <div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "16px 0",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          ></div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <div
              className=" w-[75%] bg-[#F9F9F9] rounded-lg py-5"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    height: 114,
                    width: 119,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
                  }}
                /> 
                {
                  isEdit &&             
                       <label
                  htmlFor="imageUpload"
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: -10,
                    backgroundColor: "white",
                    width: 35,
                    height: 35,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CiEdit size={25} color="#929394" />
                </label>
                }

              </div>
              <p
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  color: "#333333",
                }}
              >
               {user?.fullName}
              </p>
            </div>
          </div>

          <input
            id="imageUpload"
            type="file"
            src=""
            onChange={onImageChange}
            style={{ display: "none" }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 35,
              marginBottom: 35,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 33,
              }}
            >
              <p
                onClick={() => setIsEdit(true)}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: isEdit ? "#00809E" : "#818181",
                  cursor: "pointer",
                  borderBottom: isEdit ? "3px solid #00809E" : "none",
                  padding: "6px 0px",
                }}
              >
                Edit Profile
              </p>
              <p
                onClick={() => setIsEdit(false)}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: isEdit ? "#818181" : "#00809E",
                  cursor: "pointer",
                  borderBottom: isEdit ? "none" : "3px solid #00809E",
                  padding: "6px 0px",
                }}
              >
                Change Password
              </p>
            </div>
          </div>
          {isEdit ? ( 
            <div className=" flex justify-center items-center"> 
             <div className="bg-[#F9F9F9]  w-[75%] p-[40px] rounded-lg">
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#00809E",
                  textAlign: "center",
                }}
              >
                Edit Your Profile
              </p> 
<div className=" flex items-center justify-center "> 
  <Form style={{  width:"60%" }} layout="vertical"
   onFinish={onFinish} initialValues={{
    fullName: user?.fullName,
    email: user?.email
  }}
   > 
  <div>
                <div>
                  
                  <Form.Item name="fullName" label={<p className=" text-[#636363] text-[14px] font-[500] py-1 ">  User Name </p>}> 
                  <Input
                  
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
               
                    }} 
                  />
                  </Form.Item>
                 
                </div> 

                <div>
                
                  <Form.Item name="email" label={<p className=" text-[#636363] text-[14px] font-[500] py-1 ">  User Email </p>}> 
                  <Input
                  
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
                     
                    }} 
                    readOnly
                  /> 
                     </Form.Item>
                 
                </div>

       
                </div>
              <Form.Item   style={{
                        marginTop: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
              >
                <Button 
                htmlType="submit"
                  style={{ 
                    height:"45px" ,
                    backgroundColor: "#00809E",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  Save Changes
                </Button>
              </Form.Item> 
  </Form>
                

</div>
              
            </div>
            </div>
             
          ) : (
            <div className=" flex justify-center items-center">
              <div
                className=" bg-[#F9F9F9] w-[75%] p-[40px] rounded-lg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                style={{ width: "55%", height: "fit-content" }}
                onFinish={handleChangePassword}  
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Current Password
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="currentPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your current password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
             
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    htmlFor=""
                  >
                    New Password
                  </label>
                  <Form.Item
                    name="newPassword"
                    dependencies={['currentPassword']}
                    rules={[
                      {
                        required: true, 
                        message: "Please input your New password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('currentPassword') === value) {
                            return Promise.reject(new Error('The New password is similar to the current Password'));
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
                 
                </div>

                <div style={{ marginBottom: "40px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    htmlFor="email"
                  >
                    Re-Type Password
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="confirmPassword"
                    dependencies={['newPassword']}
                    rules={[
                      {
                        required: true, 
                        message: "Please input your Confirm password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
              
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <Form.Item
                      style={{
                        marginTop: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button 
                      htmlType="submit"
                        style={{
                          height: 44,
                          width: 150,
                          backgroundColor: "#07254A",
                          color: "white",
                          borderRadius: "8px",
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        Save Changes
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
