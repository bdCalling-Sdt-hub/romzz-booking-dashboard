import { useState } from "react";

import { ConfigProvider, Rate,  Switch, Table } from "antd";

import Swal from "sweetalert2";

import { FaEye } from "react-icons/fa6";
import WebsiteReviewModal from "../../../Components/Dashboard/WebsiteReviewModal";
import { useGetFeedbackQuery, useUpdateStatusMutation } from "../../../redux/apislices/DashboardSlices";
import { imageUrl } from "../../../redux/api/apiSlice";


const WebsiteReview = () => {
  const [getReview, setGetReview] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1); 
  const {data:feedbacks , refetch} = useGetFeedbackQuery(page) 
  const [updateStatus] = useUpdateStatusMutation()
console.log(feedbacks);  
  const [userStatus, setUserStatus] = useState(null);  
  // console.log(userStatus); 

  const data  = feedbacks?.data?.result?.map((value , index)=>({
    key: index+1 , 
    id: value?._id ,
    name: value?.userId?.fullName,
    image:value?.userId?.avatar.startsWith("https") ?  value?.userId?.avatar : `${imageUrl}${value?.userId?.avatar}`   ,
    reviews: value?.feedback ,
    rating: value?.rating , 
    status:value?.visibilityStatus
  }))

  const handleChangeStatus = async(checked , record) => {
    setUserStatus(checked); 
    const newStatus  = record?.status === "hide" ? "show" : "hide"
    const id  = record?.id   
    const value ={
      id:id ,
      visibilityStatus:newStatus
    }
    console.log(newStatus);    
    await updateStatus(value).then((res)=>{console.log(res) 
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(()=> 
            refetch()
          )
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

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key", 
      render:(key)=><p>{((page-1)*10)+key}</p>
    },
    {
      title: "Name",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (img, record) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center", 
              justifyContent:"center" ,
              gap: 12,
            }}
          > 
            <img src={img} height={40} width={40} className="rounded-full" />
            <p>{record?.name}</p>
          </div>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Reviews",
      dataIndex: "reviews",
      key: "reviews",
      align: "center", 
      render:(reviews) => <p>{reviews.slice(0,15)}...</p>
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <button
          onClick={() => {
            setOpen(true), setGetReview(record);
          }}
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            color: "#00809E",
            background: "white",
          }}
        >
          <FaEye size={22} />
        </button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-1"> 
        <ConfigProvider
  theme={{ 
    components:{
      handleBg:"#D9D9D9"
    } ,
    token: { 
      colorPrimary:"#00809E"
    },
  }}
>
          <Switch
            defaultChecked={record.status === "show"}
         
            onClick={(checked) => handleChangeStatus(checked, record)}
          />
</ConfigProvider> 
          <p>{record.status === "show" ? <p className=" text-[#00809E] font-medium">Active </p>  : <p className="text-[#5C5C5C] font-medium"> Hide</p> }</p> 
        </div>
      ),
    },
  ];


  return (
    <div>
      <div
        style={{
          padding: "20px",
          borderRadius: "12px",
        }}
      >
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
              Website Review
            </h3>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            style={{}}
            dataSource={data}
            pagination={{
              defaultCurrent: parseInt(page),
              onChange: (page)=>setPage(page),
              total: feedbacks?.data?.meta?.total,
            
            }}
          />
        </div>
      </div>

      <WebsiteReviewModal open={open} setOpen={setOpen} getReview={getReview} />
    </div>
  );
};

export default WebsiteReview;
