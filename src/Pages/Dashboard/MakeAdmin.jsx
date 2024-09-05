import {  useState } from "react";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import AdminModal from "../../Components/Dashboard/AdminModal";
import { useGetAdminQuery, useUpdateUserStatusMutation } from "../../redux/apislices/DashboardSlices";
import { useGetProfileQuery } from "../../redux/apislices/AuthSlices";
import { MdPerson, MdPersonOff } from "react-icons/md";

const MakeAdmin = () => {
  const [openAddModel, setOpenAddModel] = useState(false);   
  const [page, setPage] = useState(1)
  const {data:AdminInfo} = useGetProfileQuery()   
  const [updateUserStatus] = useUpdateUserStatusMutation() 
  const adminRole = AdminInfo?.data?.role   
  const {data:admins , refetch} = useGetAdminQuery(page)  
  const pagePerSize = 10
  const adminsInfo  = admins?.data?.result
  const data = adminsInfo?.map((value , index) =>({
    key: index+1, 
    id: value?._id ,
    email: value?.email,
    admin_name: value?.fullName , 
    status:value?.status
  }))  

  const handleStatus =(value) =>{
 const newStatus = value?.status === "active" ? "block" : "unblock" 
 handleUpdateStatus(value , newStatus)
  } 

  const handleUpdateStatus = async(value , newStatus) =>{
 const data = {
  id: value?.id , 
  status: newStatus
 } 
 Swal.fire({
  text: `Are you sure you want to ${newStatus} this admin?`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes",
  cancelButtonText: "No",
}).then(async(result) => {
  if (result.isConfirmed) {
await updateUserStatus(data).then((res)=>{  
  
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

}) } }) 
  }


  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key", 
      render:(key)=><p>{((page-1)*pagePerSize)+key}</p> ,
      width: 150,
    },
    {
      title: "Admin Name",
      dataIndex: "admin_name",
      key: "admin_name",
    },

    {
      title: "Admin Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      textAlign: "center",
      render: (_, record) => (
        <Button 
        disabled={adminRole !== "superAdmin"}
          onClick={() => handleStatus(record)} 
          style={{ backgroundColor:"white" , border:"none"}}
        > 
        {
          record?.status === "active" ? <MdPerson  size={25} className=" text-[#00809E]" /> : <MdPersonOff  size={25} className=" text-red-500" />
        }   
        </Button>
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
              Make Admin
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              onClick={() => setOpenAddModel(true)} 
              disabled={adminRole !== "superAdmin"}
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
              Create admin
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data} 
            pagination={{
              current:parseInt(page) ,
              total:admins?.data?.meta?.total , 
              onChange:(page)=>setPage(page)
            }}

          />
        </div>
      </div>
      <AdminModal
        openAddModel={openAddModel}
        setOpenAddModel={setOpenAddModel} 
        refetch={refetch} 
      />
    </div>
  );
};

export default MakeAdmin;
