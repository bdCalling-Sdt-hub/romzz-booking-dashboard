import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import sliderImg from "../../../assets/sliderImg.png";
import NewsModal from "../../../Components/Dashboard/NewsModal";
import ViewNewsModal from "../../../Components/Dashboard/ViewNewsModal";
import { FaEye } from "react-icons/fa6";

const data = [
  {
    key: 1,
    name: "How does carpet steam cleaning...",
    date: "09 Dec 2024",
    image: <img src={sliderImg} height={140} width={140} />,
  },

  {
    key: 2,
    name: "House-sharing Concierge- Your....",
    date: "09 Dec 2024",
    image: <img src={sliderImg} height={140} width={140} />,
  },
  {
    key: 3,
    name: "5 Reasons Why House-Sharing is...",
    date: "09 Dec 2024",
    image: <img src={sliderImg} height={140} width={140} />,
  },
];

const News = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [getNews, setGetNews] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const [itemForEdit, setItemForEdit] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
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
            <p> {img} </p>
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
            onClick={() => handleDelete()}
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

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };
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
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              style: {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
              },
            }}
          />
        </div>
      </div>

      <NewsModal
        itemForEdit={itemForEdit}
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel}
      />
      <ViewNewsModal open={open} setOpen={setOpen} getNews={getNews} />
    </div>
  );
};

export default News;
