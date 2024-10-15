import React, { useState } from 'react';
import { useGetPackagesQuery } from '../../redux/apislices/DashboardSlices';
import { Table } from 'antd';
import { CiEdit } from 'react-icons/ci';
import PackagesUpdateModal from '../../Components/Dashboard/PackagesUpdateModal';

const Packages = () => {  
    const [open ,setOpen] = useState(false)  
    const [items , setItems] = useState()
    const {data:packages , refetch} = useGetPackagesQuery()  


  const data =packages?.data?.map((value , index) =>({ 
 key: index+1 , 
 id: value?._id , 
 package:value?.title, 
 price:value?.price , 
 type:value?.billingCycle , 
 features:value?.features

   }))

    const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key", 
        },
        {
          title: "Package Name",
          dataIndex: "package",
          key: "package",
        },
        {
          title: "Billing Cycle",
          dataIndex: "type",
          key: "type",
        },
    
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
        },
    
        {
          title: "Action",
          dataIndex: "action",
          key: "action", 
          render: (_, record) => (
            <button
            onClick={() => {
                setOpen(true), setItems(record);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#00809E",
              background: "white",
            }}
          >
            <CiEdit size={25} />
          </button>
          ),
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
                Packages
              </h3>
            </div>
        
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={data} 
         
            />
          </div>
        </div>
 <PackagesUpdateModal open={open} setOpen={setOpen} items={items} refetch={refetch} />
      </div>
    );
};

export default Packages;