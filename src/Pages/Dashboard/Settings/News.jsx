import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import NewsModal from "../../../Components/Dashboard/NewsModal";
import ViewNewsModal from "../../../Components/Dashboard/ViewNewsModal";
import { FaEye } from "react-icons/fa6";
import { useDeleteNewsMutation, useGetNewsQuery } from "../../../redux/apislices/DashboardSlices";
import { imageUrl } from "../../../redux/api/apiSlice";
import moment from "moment";

const News = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [getNews, setGetNews] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [itemForEdit, setItemForEdit] = useState(null);  
  // get news 
  const {data:news , refetch} = useGetNewsQuery(page)   
  const [DeleteNews] = useDeleteNewsMutation() 
  const perPageSize = 10
  const newsInfo = news?.data?.result 
console.log(news);

  const data = newsInfo?.map((value , index)=>({
    key: index+1 , 
    id:value?._id ,
    name: value?.title, 
    description:value?.description , 
    date: moment(value?.createdAt).format('D MMM  YYYY'),
    image: value?.image?.startsWith("https") ? value?.image : `${imageUrl}${value?.image}`,
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
        await DeleteNews(id).then((res) => {
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
      render:(key)=><p>{((page-1)*perPageSize)+key}</p>
    },
    {
      title: "News Title",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (img, record) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
          <img src={img} height={140} width={140} />
            <p>{record?.name}</p>
          </div>
        );
      },
    },
    {
      title: "Publication Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <button
            onClick={() => {
              setOpen(true), setGetNews(record);
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

          <button
            onClick={() => {
              setOpenAddModel(true), setItemForEdit(record);
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
              News
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              onClick={() => setOpenAddModel(true)}
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
              Add News
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            style={{}}
            dataSource={data}
            pagination={{
              defaultCurrent: parseInt(page),
              onChange:(page)=>setPage(page),
              total: news?.data?.meta?.total,
            }}
          />
        </div>
      </div>

      <NewsModal
        itemForEdit={itemForEdit}
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel} 
        setItemForEdit={setItemForEdit} 
        refetch={refetch}
      />
      <ViewNewsModal open={open} setOpen={setOpen} getNews={getNews} />
    </div>
  );
};

export default News;
