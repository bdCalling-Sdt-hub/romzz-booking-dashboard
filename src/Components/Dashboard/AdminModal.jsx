import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { useCreateAdminMutation } from "../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";

const AdminModal = ({ openAddModel, setOpenAddModel ,refetch }) => { 
  const [createAdmin] = useCreateAdminMutation() 
  const [form] = Form.useForm() 

  const onFinish = async(values) => { 
    await createAdmin(values).then((res)=>{
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            refetch();   
            setOpenAddModel(false); 
            form.resetFields() 
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
  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => {
        // null;

        setOpenAddModel(false); 
        form.resetFields()
      }}
      width={500}
      footer={false}
    >
      <div className="p-6  mt-4">
        <h1
          className="font-semibold text-[#00809E] text-xl"
          style={{ marginBottom: "12px" }}
        >
          {`Add  Admin`}
        </h1>
        <Form onFinish={onFinish} form={form}>
          <div>
            <p className="text-[#6D6D6D] py-1">Name</p>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input Package Name",
                },
              ]}
            >
              <Input
                className="w-[100%] border outline-none px-3 py-[10px]"
                type="text"
              />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#6D6D6D] py-1">Email </p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input Package Name",
                },
              ]}
            >
              <Input
                className="w-[100%] border outline-none px-3 py-[10px]"
                type="text"
              />
            </Form.Item>
          </div>

          <div className="mt-5">
            <p className="text-[#6D6D6D] py-1">Password </p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input Package Name",
                },
              ]}
            >
              <Input.Password
                className="w-[100%] border outline-none px-3 py-[10px]"
                type="text"
              />
            </Form.Item>
          </div>

          <Form.Item className="text-center mt-6">
            <Button htmlType="submit" style={{backgroundColor:"#00809E" , height:"45px" , color:"white" , borderRadius:"10px"}}>
              create Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AdminModal;
