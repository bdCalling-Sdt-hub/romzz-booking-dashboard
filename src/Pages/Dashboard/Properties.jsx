import { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Input, Modal, Select, Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { RiLoader3Fill } from "react-icons/ri";
import Logo from "../../assets/img.png";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { MdOutlineDelete, MdPersonOff } from "react-icons/md";

import { IoEyeOutline } from "react-icons/io5";
import PostRequestModal from "../../Components/Dashboard/PostRequestModal";

const data = [
  {
    key: "#1239",

    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Corona, Michigan",
  },
  {
    key: "#1238",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Great Falls, Maryland ",
  },
  {
    key: "#1237",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Syracuse, Connecticut ",
  },
  {
    key: "#1236",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Lafayette, California",
  },
  {
    key: "#1235",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Pasadena, Oklahoma",
  },
  {
    key: "#1234",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Lansing, Illinois",
  },
  {
    key: "#1233",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    properties: {
      name: "Two Bedroom Apartment for rent...",
      img: <img src={Logo} height={48} width={48} />,
    },
    owner: "mithila",
    rent: "$640",
    date: "9 Dec 2024",
    location: "Coppell, Virginia",
  },
];

const Properties = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false);
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Properties Title",
      dataIndex: "properties",
      key: "properties",
      render: (properties) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> {properties?.img} </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {properties?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Properties Owner",
      dataIndex: "owner",
      key: "owner",
    },

    {
      title: "Rent Per Week",
      dataIndex: "rent",
      key: "rent",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            <IoEyeOutline size={22} className="" />
          </button>

          <div>
            <button onClick={() => handleDelete(record?.key)}>
              <MdOutlineDelete size={25} className=" text-red-500" />
            </button>
          </div>
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
              Properties
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
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle"
              />
            </div>
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
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              // defaultCurrent: 1,
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
      <PostRequestModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Properties;
