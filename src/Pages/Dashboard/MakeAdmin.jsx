import { useEffect, useRef, useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import AdminModal from "../../Components/Dashboard/AdminModal";

const data = [
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
  },
];

const MakeAdmin = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

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
              Make Admin
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
              Create admin
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
      <AdminModal
        openAddModel={openAddModel}
        setOpenAddModel={setOpenAddModel}
      />
    </div>
  );
};

export default MakeAdmin;
