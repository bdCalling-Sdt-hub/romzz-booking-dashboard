import { Button, Form, Input } from "antd";
import React from "react";
import { useGetSocialMediaQuery, useUpdateSocialMediaMutation } from "../../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";

const SocialMedia = () => { 
  const {data:medias , refetch} = useGetSocialMediaQuery()   
  const [updateSocialMedia] = useUpdateSocialMediaMutation()
  const socialMedias = medias?.data 
  // console.log(socialMedias); 

  const handleSubmit =async(formValues , id)=>{  
    const data = {
      id: id ,
  value: formValues
    }

    console.log(data); 
    await updateSocialMedia(data).then((res)=>{
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

  return (
    <div>
      <h3
        className="py-4"
        style={{
          color: "#00809E",
          fontSize: 24,
          fontWeight: "500",
        }}
      >
        Social Media
      </h3> 

      <div className="w-1/2">
      
      {
        socialMedias?.map((value , index)=>  
          <Form key={index} layout="vertical" className=" mb-2" 
           initialValues={{ 
            name:value?.name ,
            url:value?.url
           }}  

           onFinish={(formValues) => handleSubmit(formValues, value._id)}
           >

        <Form.Item name="name"
          label={<p className="  text-[15px] ">Media Name :</p>}
        >
          <Input
          
            placeholder="Give Name here"
            className="h-[45px]"
          />
        </Form.Item>
        
        <Form.Item name="url"
          label={<p className=" text-[15px] ">Media Link :</p>}
        >
          <Input
          
            placeholder="Give url here"
            className="h-[45px]"
          />
        </Form.Item>


        <Form.Item className=" text-end">
          <Button type="primary" htmlType="submit" style={{height:"45px"  , width:"120px"}}>
            Submit
          </Button>
        </Form.Item>
        <p> </p>
      </Form>
        )
      }
 
      </div>
    </div>
  );
};

export default SocialMedia;
