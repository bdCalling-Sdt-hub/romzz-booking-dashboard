import React from 'react';
import { useGetSubscriberQuery } from '../../redux/apislices/DashboardSlices';
import { useState } from 'react';
import { Table } from 'antd';
import { imageUrl } from '../../redux/api/apiSlice';
import moment from 'moment';

const Subscribers = () => { 
    const [page, setPage] = useState(1) 
 const {data:subscribers} = useGetSubscriberQuery(page) 
 console.log(subscribers);
    const pagePerSize = 10  

    const data =subscribers?.data?.result?.map((value , index) =>({
        key: index+1, 
        user: {
          name: value?.userId?.fullName,
          img:value?.userId?.avatar?.startsWith("https")? value?.userId?.avatar : `${imageUrl}${value?.userId?.avatar}`,
        },
        booking:moment(value?.createdAt).format("DD MMM YYYY") ,
        price: value?.packageId?.price,
        status:value?.packageId?.title ,
      }))  

      
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key", 
      render:(_,record,index)=><p>{((page-1)*pagePerSize)+record?.key}</p>
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> <img src={user?.img} style={{borderRadius:"100%" , height:40 , width:40  }} />  </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {user?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Booking Date",
      dataIndex: "booking",
      key: "booking",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ]; 

    return (
        <div className="">
        <div
          style={{
            padding: "10px",
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
                Subscribers
              </h3>
            </div>
        
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={data} 
              pagination={{
                current:parseInt(page),  
                total:subscribers?.data?.meta?.total ,
                onChange:(page)=>setPage(page)
              }}
            />
          </div>
        </div>

      </div>
    );
};

export default Subscribers;