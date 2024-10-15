import { useState } from "react";
import { DatePicker, Input, Select, Table } from "antd";
import { FiSearch } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import TransactionsModal from "../../Components/Dashboard/TransactionsModal";
import { useGetTransactionsQuery } from "../../redux/apislices/DashboardSlices";
import moment from "moment";
import { imageUrl } from "../../redux/api/apiSlice";

const Transactions = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );  
  const [searchValue , setSearchValue] = useState("")
  const [status , setStatus] = useState()
  const [open, setOpen] = useState(false);  
  const [modalData , setModalData] = useState(null)
  const {data:transactions} = useGetTransactionsQuery({page:page, searchTerm:searchValue , status:status})  
 
  const data = transactions?.data?.result?.map((value , index)=>({
    key: index+1,
    user: {
      name:value?.userId?.fullName,
      img: value?.userId?.avatar?.startsWith("https") ?  value?.userId?.avatar : `${imageUrl}${value?.userId?.avatar}`,
    location:value?.userId?.permanentLocation?.address , 
    email:value?.userId?.email , 
    phone:value?.userId?.phoneNumber
    }, 
    host: {
      name:value?.propertyId?.createdBy?.fullName,
      img: value?.propertyId?.createdBy?.avatar?.startsWith("https") ?  value?.propertyId?.createdBy?.avatar : `${imageUrl}${value?.propertyId?.createdBy?.avatar}`,
    location:value?.propertyId?.createdBy?.permanentLocation?.address , 
    email:value?.propertyId?.createdBy?.email , 
    phone:value?.propertyId?.createdBy?.phoneNumber
    },  
    txtId: value?.trxId ,
    hostFee: value?.adminFee ,
    status: value?.status ,
    date: moment(value?.createdAt).format("d MMM YYYY"),
    price: value?.payoutAmount,
    payment: value?.totalAmount, 

  }))
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
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
            <p> <img src={user?.img} height={48} width={48} style={{borderRadius:"10px"}} />  </p>

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
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "User  Payment",
      dataIndex: "payment",
      key: "payment",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`${status === "Published" && "text-[#FF9773]"} ${
            status === "Waiting" && "text-[#00809E]"
          }  font-medium`}
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
            gap: "6px",

            paddingRight: 10,
          }}
        >
          <button
            onClick={() => {setOpen(true) , setModalData(record)}}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            <IoEyeOutline size={22} className="" />
          </button>
        </div>
      ),
    },
  ]; 

  const handleSearch =(e)=>{
    const value =e.target.value 
    setSearchValue(value)
  } 

  const handleStatusChange = (value) =>{ 
    setStatus(value)
  }

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  //   dropdown data
  const items = [
    {
      label: "Confirmed",
      value: "confirmed",
    },
    {
      label: "Canceled",
      value: "canceled",
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
              Transactions
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle" 
                onChange={handleSearch}
              />
            </div>

            <Select
              placeholder="Status"
              style={{
                width: 150,
                height: 40,
              }}
                onChange={handleStatusChange}
              options={items}
            />

          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: transactions?.data?.meta?.total,
              style: {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
                // gap: 10,
                // justifyContent: "space-between",
              },
            }}
          />
        </div>
      </div>
      <TransactionsModal open={open} setOpen={setOpen} modalData={modalData} />
    </div>
  );
};

export default Transactions;
