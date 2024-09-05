import { useState } from "react";
import {Input,Table } from "antd";
import Swal from "sweetalert2";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDelete, MdPerson, MdPersonOff,} from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import UserModal from "../../Components/Dashboard/UserModal";
import { useGetUsersQuery, useUpdateUserStatusMutation } from "../../redux/apislices/DashboardSlices";
import { imageUrl } from "../../redux/api/apiSlice";

const Users = () => { 
 
  const [open, setOpen] = useState(false);  
  const [searchValue , setSearchValue] = useState()  
  const [modalData , setModalData] = useState(null)  
  const [page, setPage] = useState(1)
  const {data:users , refetch} = useGetUsersQuery({page:page ,search:searchValue})   
  const [updateUserStatus] = useUpdateUserStatusMutation() 
  const [userStatus , setUserStatus ]= useState("") 
  const pagePerSize = 10 
  console.log(users);
  const usersInfo = users?.data?.result  

  const data =usersInfo?.map((value , index) =>({
    key: index+1, 
    id:value?._id ,
    user: {
      name: value?.fullName,
      img:value?.avatar?.startsWith("https")?value?.avatar : `${imageUrl}${value?.avatar}`,
    },
    email: value?.email,
contact:value?.phoneNumber ,
    location: value?.permanentAddress,
status:value?.status ,
  })) 

  const handleStatus=(record)=>{
 const newStatus  = record?.status === "active" ? "block" : "unblock" 
 setUserStatus(newStatus) 
 handleUpdateStatus(record , newStatus)
  }


  const handleUpdateStatus = async(record , newStatus ) => { 
    // console.log(values);   
    const data ={ 
      id:record?.id ,
      status: newStatus ,
    } 
    console.log(data);  
    Swal.fire({
      text: `Are you sure you want to ${newStatus} this user?`,
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

  };

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
            <p> <img src={user?.img} height={48} width={48} />  </p>

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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",

            paddingRight: 10,
          }}
        >
          <button
            onClick={() => {setOpen(true) , setModalData(record)} }
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            <IoEyeOutline size={22} className="" />
          </button>

          <div>
            <button onClick={() => {handleStatus(record)}}> 
              {
                record?.status === "active" ? <MdPerson  size={25} className=" text-[#00809E]" /> : <MdPersonOff  size={25} className=" text-red-500" />
              }
              
            </button>
          </div>
        </div>
      ),
    },
  ]; 

  const handleSearch =(e)=>{ 
    const value = e.target.value  
    setSearchValue(value)
  }



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
              Users
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "370px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search Using Email & Location"
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle" 
                onChange={(e)=>handleSearch(e)}
              />
            </div>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data} 
            pagination={{
              current:parseInt(page),  
              total:users?.data?.meta?.total ,
              onChange:(page)=>setPage(page)
            }}
          />
        </div>
      </div>
      <UserModal open={open} setOpen={setOpen} modalData={modalData} />
    </div>
  );
};

export default Users;
