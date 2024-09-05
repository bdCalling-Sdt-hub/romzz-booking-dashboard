import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { useCreateSliderMutation, useUpdateSliderMutation } from "../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";

const SliderModal = ({ itemForEdit, setOpenAddModel, openAddModel  ,refetch , setItemForEdit}) => { 
  console.log(itemForEdit);
  const [imgFile, setImgFile] = useState(""); 
  const [imgURl , setImgUrl] = useState(null) 
  const [form] =  Form.useForm()

  const [createSlider] = useCreateSliderMutation() 
  const [updateSlider] = useUpdateSliderMutation()
 
  useEffect(()=>{

    if(itemForEdit){
      form.setFieldsValue({title:itemForEdit?.name}) 
      setImgUrl(itemForEdit?.slider_image)
    }
  } ,[itemForEdit])

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file); 
    setImgUrl(URL.createObjectURL(file))
  };
  const onFinish = async(values) => {
    console.log(values); 
    const formData  = new FormData()  
    if(imgFile){
      formData.append("image" , imgFile)
    }  
    formData.append("title" ,values?.title)  
 
    const id = itemForEdit?.id 
    if(itemForEdit?.id){
  await updateSlider({id , formData}).then((res)=>{ 
     if(res?.data?.success){
    Swal.fire({
        text:res?.data?.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch();  
        setItemForEdit(null)  
        setImgUrl(null) 
        setImgFile(null)
        form.resetFields() 
        setOpenAddModel(false);
      })
}else{
    Swal.fire({
        title: "Oops",
        text: res?.error?.data?.message,
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
  
}})
    }else{
      await createSlider(formData) .then((res)=>{
        if(res?.data?.success){
          Swal.fire({
              text:res?.data?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              refetch();  
              setItemForEdit(null)  
              setImgUrl(null) 
              setImgFile(null)
              form.resetFields() 
              setOpenAddModel(false);
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

  };



  return (
    <div>
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;  
          setItemForEdit(null) 
          setImgUrl(null) 
          setImgFile(null);
          setOpenAddModel(false); 
          form.resetFields()
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          >
            {itemForEdit ? "Update Slider" : "Add Slider"}
          </h1>
          <Form onFinish={onFinish} form={form}>
            <div>
              <p className="text-[#6D6D6D] py-1"> Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="mt-5">
              <p className="text-[#6D6D6D] py-1">Slider Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="images">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgURl ? (
                      <img src={imgURl} alt="" />
                    ) : (
                      <FaRegImage className="text-2xl" />
                    )}
                  </div>

                  <div className="hidden">
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

            <Form.Item className="text-center mt-8">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SliderModal;
