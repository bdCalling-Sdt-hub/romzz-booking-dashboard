import { useEffect, useRef, useState } from "react";
import { Input, Table } from "antd";
import Swal from "sweetalert2";
import Logo from "../../assets/img.png";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useGetRequestQuery } from "../../redux/apislices/DashboardSlices";
import { imageUrl } from "../../redux/api/apiSlice";


const PostRequest = () => {  
const [searchValue , setSearchValue] = useState() 
const [page , setPage] = useState(1) 
  const {data:requests} = useGetRequestQuery({searchValue,page})  
  console.log(requests); 
  const pagePerSize = 10 
const navigate = useNavigate()

  const data = requests?.data?.data?.map((value , index)=>({
    key: index+1 , 
    id: value?._id ,
    status: value?.status,
    user: {
      name: value?.createdBy?.fullName,
      img: value?.createdBy?.avatar?.startsWith("https") ?  value?.createdBy?.avatar : `${imageUrl}${value?.createdBy?.avatar}` ,
    },
    email: value?.createdBy?.email, 
    contact:value?.createdBy?.phoneNumber
  }))


  const handleViewReq =(id) =>{
    navigate(`/properties/${id}`)
  }



  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key", 
      render:(_,record,index)=> <p>{((page-1)*pagePerSize)+ record?.key}</p>
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
          <img src={user?.img} style={{borderRadius:"100%" , height:40 , width:40 , objectFit:"cover" }} />
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`${status === "pending" && "text-[#FF9773]"} ${
            status === "approve" && "text-[#00809E]"
          } ${status === "reject" && "text-[#e64237]"} font-medium`}
        >
          {" "}
          {status}
        </p>
      ),
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
        
            <button onClick={()=>handleViewReq(record?.id)}
              style={{
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
            >
              <IoEyeOutline size={22} className="" />
            </button>{" "}
         
        </div>
      ),
    },
  ]; 
  
  const handleSearch =(e)=>{
     const value = e?.target?.value 
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
              Post Request
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
              current: parseInt(page), 
              total:requests?.data?.meta?.total ,
              onChange:(page)=>setPage(page)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostRequest;
