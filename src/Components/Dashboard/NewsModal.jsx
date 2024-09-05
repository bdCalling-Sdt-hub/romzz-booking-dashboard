import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { useCreateNewsMutation, useUpdateNewsMutation } from "../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";

const NewsModal = ({ itemForEdit, setOpenAddModel, openAddModel , setItemForEdit , refetch }) => { 
  console.log(itemForEdit);
  const [imgFile, setImgFile] = useState(""); 
  const [imgUrl , setImgUrl] = useState(null)   
  const [createNews]=useCreateNewsMutation() 
  const [updateNews] = useUpdateNewsMutation()
  const [form] = Form.useForm()

  useEffect(()=>{ 
    if(itemForEdit){
 form.setFieldsValue({title:itemForEdit?.name , description:itemForEdit?.description}) 
 setImgUrl(itemForEdit?.image)
    }
  },[itemForEdit])
 
  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file); 
    setImgUrl(URL.createObjectURL(file))
  }; 


  const onFinish =async(values) => {
    console.log(values); 
    const formData =  new FormData() 
    if(imgFile){
      formData.append("image" , imgFile)
    } 
    const {images , ...otherValues} = values  

    Object.entries(otherValues).forEach(([field , value])=>{
      formData.append(field , value)
    }) 

    const id = itemForEdit?.id  

    if(itemForEdit?.id){
      await updateNews({id , formData}).then((res)=>{ 
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
          await createNews(formData) .then((res)=>{
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
          setImgFile(null); 
          setImgUrl(null) 
          form.resetFields()
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          >
            {itemForEdit ? "Update News" : "Add News"}
          </h1>
          <Form onFinish={onFinish} layout="vertical" form={form}>
            <div>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
                label={<p className="text-[#6D6D6D]"> Title</p>}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="mt-4 mb-4">
              <p className="text-[#6D6D6D] py-1"> Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="images">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgUrl ? (
                      <img src={imgUrl} alt="" />
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

            <Form.Item
              name="description"
              label={<p className="text-[#6D6D6D]"> Description</p>}
            >
              <Input.TextArea rows={3} />
            </Form.Item>

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

export default NewsModal;
