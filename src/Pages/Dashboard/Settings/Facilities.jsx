import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { PlusOutlined } from "@ant-design/icons";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteFacilityMutation, useGetFacilityQuery } from "../../../redux/apislices/DashboardSlices";
import FacilityModal from "../../../Components/Dashboard/FacilityModal";
import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/apiSlice";

const Facilities = () => {
  const [open, setOpen] = useState(false);  
  const [modalData , setModalData] = useState({})  
  const [page, setPage] = useState(1)
  const {data:facilities , refetch} = useGetFacilityQuery()  
  const [deleteFacility] = useDeleteFacilityMutation()
  console.log(facilities?.data); 

  const data = facilities?.data?.map((value , index) =>({
    key: index+1, 
    title: value?.name, 
    icon:value?.icon?.startsWith("https")? value?.icon : `${imageUrl}${value?.icon}`,
    id:value?._id
  }))

  const handleDelete = (id) => { 
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteFacility(id).then((res) => {
if(res?.data?.success){
  Swal.fire({
    text: res?.data?.message,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    refetch();
  });
}else {
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
    });
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
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon", 
      render:(icon)=>(
        <img src={icon} alt="" style={{objectFit:"contain"}} />
      )
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "Action",
      render: (_,record) => (
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",

              gap: 20,
            }}
          >
            <button
              onClick={() => {
                setOpen(true) 
                setModalData(record)
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
            <button
              onClick={() => handleDelete(record?.id)}
              style={{
                cursor: "pointer",
                border: "none",
                outline: "none",
                background: "white",
                color: "red",
              }}
            >
              <FaRegTrashAlt size={20} />
            </button>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="p-5">
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
            Facilities
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button
            onClick={() => setOpen(true)}
            style={{
              borderRadius: 8,
              background: "#00809E",
              height: 40,
              color: "white",
              fontSize: 14,
              fontWeight: "400",
            }}
            icon={<PlusOutlined />}
          >
            Add Facilities
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data}  pagination={{ 
        current: parseInt(page)  ,
        total:facilities?.data?.meta?.total ,
        onChange:(page)=>setPage(page)
      }}/> 

      <FacilityModal open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData} refetch={refetch} />
  
    </div>
  );
};

export default Facilities;
