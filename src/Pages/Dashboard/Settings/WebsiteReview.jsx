import { useEffect, useRef, useState } from "react";

import { Rate, Select, Switch, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

import userImg from "../../../assets/user.png";
import ViewNewsModal from "../../../Components/Dashboard/ViewNewsModal";
import { FaEye } from "react-icons/fa6";
import { render } from "react-dom";
import WebsiteReviewModal from "../../../Components/Dashboard/WebsiteReviewModal";

const data = [
  {
    key: 1,
    name: "mithila",
    date: "09 Dec 2024",
    image: (
      <img src={userImg} height={40} width={40} className="rounded-full" />
    ),
    reviews: "Literally I didn't expect but the facilities...",
    rating: 3,
  },

  {
    key: 2,
    name: "Asad",
    date: "09 Dec 2024",
    image: (
      <img src={userImg} height={40} width={40} className="rounded-full" />
    ),
    reviews: "Literally I didn't expect but the facilities...",
    rating: 3.5,
  },
  {
    key: 3,
    name: "Nadir",
    date: "09 Dec 2024",
    image: (
      <img src={userImg} height={40} width={40} className="rounded-full" />
    ),
    reviews: "Literally I didn't expect but the facilities...",
    rating: 4,
  },
];

const WebsiteReview = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [getReview, setGetReview] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const [userStatus, setUserStatus] = useState(null);

  const onChange = (checked, id) => {
    console.log(`${checked} ${id}`);
    setUserStatus(checked);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
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
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Reviews",
      dataIndex: "reviews",
      key: "reviews",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <button
          onClick={() => {
            setOpen(true), setGetReview(record);
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
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (record) => (
        <div className="flex items-center gap-1">
          <Switch
            defaultChecked
            checked={record?.key}
            onClick={(checked) => {
              onChange(checked, record?.key);
            }}
          />
          {/* <p>{userStatus === true ? "Active" : "Hide"}</p>  */}
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const items = [
    {
      value: "Guest",
      label: "Guest",
    },
    {
      value: "Host",
      label: "Host",
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
              Website Review
            </h3>
          </div>
          <div>
            <Select
              placeholder="Guest"
              style={{
                width: 150,
                height: 40,
              }}
              //   onChange={handleChange}
              options={items}
            />
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

      <WebsiteReviewModal open={open} setOpen={setOpen} getReview={getReview} />
    </div>
  );
};

export default WebsiteReview;
