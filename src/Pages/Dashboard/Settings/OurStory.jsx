import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";
import { CiImageOn } from "react-icons/ci";
import { useCreateStoryMutation, useGetStoryQuery,  useUpdateStoryMutation } from "../../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/apiSlice";

const OurStory = () => {
  const [imgFile, setImgFile] = useState(""); 
  const [imgUrl , setImgUrl] = useState(null) 
  const {data:story , refetch} = useGetStoryQuery()  
  const [createStory] = useCreateStoryMutation()
  const [updateStory] = useUpdateStoryMutation()  
  const [form]= Form.useForm()  
  const storyInfo = story?.data[0];

  console.log(story);

  useEffect(()=>{
    form.setFieldsValue({title:storyInfo?.title , storyDetails:storyInfo?.storyDetails}) 
    setImgUrl(storyInfo ? storyInfo?.image?.startsWith("https") ? storyInfo?.image : `${imageUrl}${storyInfo?.image}`: "" )
  },[storyInfo])

  const handleChange = (e) => {
    const file = e.target.files[0]; 
    setImgFile(file); 
    setImgUrl(URL.createObjectURL(file))
  }; 

  const onFinish =async(values)=>{
    console.log(values);  
    const formData = new FormData()
    const {images , ...otherValues} = values  
    if(imgFile){
      formData.append("image",imgFile)
    }  
    Object.entries(otherValues).forEach(([field , value])=>{
      formData.append(field ,value)
    })
    const id  = storyInfo?._id  
 if(id){
   
   await updateStory({id,formData}).then((res)=>{
     if(res?.data?.success){
       Swal.fire({
           text:res?.data?.message,
           icon: "success",
           showConfirmButton: false,
           timer: 1500,
         }).then(() => {
           refetch();  
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
 }else{
  await createStory(formData).then((res)=>{
    if(res?.data?.success){
      Swal.fire({
          text:res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch();  
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
 }
  }

  return (
    <div className="  px-4 py-2 rounded-lg pb-10 ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <div>
          <h3
            style={{
              color: "#00809E",
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            Our Story
          </h3>
        </div>
        <div></div>
      </div>
      {/* input feild  */}
      <div>
        <Form layout="vertical" className=" w-2/3 " onFinish={onFinish} form={form}>
          <Form.Item
            className="w-full"
            name="title"
            label={
              <p className="text-lg font-medium text-[#6D6D6D] ">Heading</p>
            }
          >
            <Input className=" h-[40px]" />
          </Form.Item>

          <Form.Item
            className="w-full"
            name="storyDetails"
            label={
              <p className="text-lg font-medium text-[#6D6D6D] ">
                Discription
              </p>
            }
          >
            <Input.TextArea rows={4} className="  resize-none" />
          </Form.Item>

          <div className="  mb-5 ">
            <p className="text-lg font-medium text-[#6D6D6D] pb-2 "> Image</p>
            <div className="bg-white rounded-xl border">
              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 "
              >
                <Form.Item name="images">
                  <div className=" flex items-center justify-center h-[150px]">
                    {imgUrl ? (
                      <img src={imgUrl} alt=""  style={{height:"150px" , width:"90%" , objectFit:"contain"}}/>
                    ) : (
                      <CiImageOn  className=" text-9xl font-light" />
                    )}
                  </div>
                  <div className=" hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
            </div>
          </div> 

          <Form.Item className=" text-end"
        style={{
          marginTop: 24,

        }}
      >
        <Button 
        htmlType="submit"
          style={{
            height: 44,
            width: 150,
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
  );
};

export default OurStory;
