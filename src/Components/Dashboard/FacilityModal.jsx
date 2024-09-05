import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { useCreateFacilityMutation, useUpdateFacilityMutation } from '../../redux/apislices/DashboardSlices';
import Swal from 'sweetalert2';

const FacilityModal = ({open ,setOpen ,modalData ,setModalData , refetch}) => {  
    console.log(modalData);
    const [imgFile , setImgFile] = useState("") 
    const [imgUrl , setImgUrl] = useState(null)  
    const [form] = Form.useForm()  
    const [createFacility] = useCreateFacilityMutation() 
    const [updateFacility] = useUpdateFacilityMutation() 

    useEffect(()=>{ 
      if(modalData){
 form.setFieldsValue({name:modalData?.title}) 
 setImgUrl(modalData?.icon)
      }
    } ,[modalData])

    const handleChange =(e) =>{
        const file = e.target.files[0] 
        setImgFile(file)  
        setImgUrl(URL.createObjectURL(file))
    } 

    const onFinish =async(values) =>{ 
      const formData= new FormData() 
      if(imgFile){
        formData.append("icon",imgFile)
      } 
       
    formData.append("name" , values?.name) 
    const id = modalData?.id  

    if(modalData?.id){
      await updateFacility({id , formData}).then((res)=>{ 
         if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            refetch();  
            setModalData(null)  
            setImgUrl(null) 
            setImgFile(null)
            form.resetFields() 
            setOpen(false);
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
          await createFacility(formData) .then((res)=>{
            if(res?.data?.success){
              Swal.fire({
                  text:res?.data?.message,
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  refetch();  
                  setModalData(null)  
                  setImgUrl(null) 
                  setImgFile(null)
                  form.resetFields() 
                  setOpen(false);
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
        <Modal
        centered
        open={open}
        onCancel={() => {
          // null;  
          setModalData(null) 
          setImgUrl(null) 
          setImgFile(null);
          setOpen(false); 
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
            {modalData ? "Update Facility" : "Add Facility"}
          </h1>
          <Form onFinish={onFinish} form={form} layout='vertical'>
    
              
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input Facility Name",
                  },
                ]} 
                label={<p className="text-[#6D6D6D] "> Name</p>}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
   

            <Form.Item name="images" label={<p className="text-[#6D6D6D] "> Image</p>}>
  <label
    htmlFor="image"
    style={{ display: "block", margin: "4px 0" }}
    className="p-3 border"
  >
    <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
      {imgUrl ? (
        <img src={imgUrl} alt="" />
      ) : (
        <FaRegImage className="text-2xl" />
      )}
    </div>
  </label>
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
      display: "none",
    }}
  />
</Form.Item>

            <Form.Item className="text-center mt-8">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    );
};

export default FacilityModal;