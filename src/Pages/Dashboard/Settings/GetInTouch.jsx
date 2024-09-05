import { Table } from "antd";
import React, { useState } from "react";
import { useGetEmailQuery } from "../../../redux/apislices/DashboardSlices";

const GetInTouch = () => {  
  const [page, setPage] = useState(1)
  const {data:emails} = useGetEmailQuery(page)  
  const emailInfo = emails?.data?.result
 const data = emailInfo?.map((value , index)=>({
  key: index+1,
  email: value?.email,
 }))


  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];



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
        Get In Touch
      </h3>
      <Table
        columns={columns}
        dataSource={data} 
        pagination={{
          current:parseInt(page) ,
          onChange:(page)=>setPage(page) ,
          total:emails?.data?.meta?.total
        }}
       
      />
    </div>
  );
};

export default GetInTouch;
