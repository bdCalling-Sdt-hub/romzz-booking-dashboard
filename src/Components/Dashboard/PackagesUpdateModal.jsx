import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import { CiCircleMinus } from 'react-icons/ci';
import { FaCircleCheck } from 'react-icons/fa6';
import { GoPlusCircle } from 'react-icons/go';
import { useUpdatePackagesMutation } from '../../redux/apislices/DashboardSlices';
import Swal from 'sweetalert2';

const PackagesUpdateModal = ({open , setOpen , items , refetch}) => {  
    console.log(items);
    const [form] = Form.useForm()   
    const [updatePackages] = useUpdatePackagesMutation()   

    useEffect(()=>{
 if(items){
 form.setFieldsValue({title:items?.package , price:items?.price , features:items?.features })
 }
    },[items])

    const onFinish =async(values)=>{    
        const id = items?.id
        const newValues = {
       id:id , 
       ...values
        }
         
        await updatePackages(newValues).then((res)=>{
          
            if(res?.data?.success){
                Swal.fire({
                    text:res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    refetch();  
                    setOpen(false);
                  })
            } 
        })
 console.log(values);
    }
    return (
        <div>
        <Modal
          centered
          open={open}
          onCancel={() => {
            // null;
    
            form.resetFields()
            setOpen(false);
          }}
          width={500}
          footer={false}
        >
          <div className="p-6 ">
            <h1
              className="font-semibold text-[#555555] text-xl"
              style={{ marginBottom: "10px", marginTop: "8px" }}
            >
              { "Update Packages"}
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
                  label={<p className="text-[#6D6D6D]"> Package Name</p>}
                >
                  <Input
                    className="w-[100%] border outline-none px-3 py-[8px]"
                    type="text"
                  />
                </Form.Item> 

                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input Package Price ",
                    },
                  ]}
                  label={<p className="text-[#6D6D6D]"> Package Price</p>}
                >
                  <Input
                    className="w-[100%] border outline-none px-3 py-[8px]"
                    type="text"
                  />
                </Form.Item>  
 
 
                <p className="text-[#6D6D6D]"> Features</p>
                <Form.Item    
                        style={{ border: "1px solid #E7EBED", borderRadius: 8 }} 

                    >
                        <Form.List name={"features"}  >
                                    {
                                        (fields, { add, remove }) => (
                                            <>
                                                {
                                                    fields.map((field, index) => {
                                                        return(
                                                        <Form.Item
                                                            required={false}
                                                            key={index}
                                                            className="w-full"
                                                            style={{marginBottom : 0}}
                                                        >
                                                            <div  className='flex items-center mb-2 gap-[30px] w-full'>
                                                                <Form.Item
                                                                    name={field.name}
                                                                    fieldKey={field.fieldKey}
                                                                    validateTrigger={['onChange', 'onBlur']}
                                                                    style={{marginBottom : 0}}
                                                                    className='w-full'
                                                                >
                                                                    <Input
                                                                        style={{
                                                                            width:"100%",
                                                                            height: 40,
                                                                            border: "1px solid #E7EBED",
                                                                            background: "transparent",
                                                                            borderRadius: "none",
                                                                            outline: "none",
                                                                            color: "#415D71",
                                                                        }}
                                                                        placeholder='Enter Package Services'
                                                                        className='roboto-regular text-sm leading-5'
                                                                        prefix={<FaCircleCheck size={20} style={{marginRight: 5}} color='#12354E' />}
                                                                    />
                                                                </Form.Item>
                                                                <div>
                                                                    {
                                                                        fields.length > 0 ? (
                                                                            <CiCircleMinus
                                                                                size={30}
                                                                                className="dynamic-delete-button cursor-pointer text-[#D7263D]"
                                                                                onClick={() => remove(field.name)}
                                                                            />
                                                                        ) 
                                                                        : 
                                                                        null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </Form.Item>
                                                    )})
                                                }

                                                <Form.Item 
                                                    style={{width: "100%", margin: 0, display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}
                                                >
                                                    <GoPlusCircle
                                                        size={30}
                                                        color='#12354E'
                                                        onClick={() => add()}
                                                    />
                                                </Form.Item>
                                            </>
                                        )
                                    }
                        </Form.List>
                    </Form.Item> 

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

export default PackagesUpdateModal;