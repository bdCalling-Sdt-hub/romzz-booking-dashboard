import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { PlusOutlined } from "@ant-design/icons";
import { FaRegTrashAlt } from "react-icons/fa";
const data = [
  {
    key: 1,
    title: "WiFi",
  },
  {
    key: 2,
    title: "Network",
  },
  {
    key: 3,
    title: "Smoking",
  },
];
const Facilities = () => {
  const [open, setOpen] = useState(false);

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
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "Action",
      render: (_, record) => (
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
                setOpen(true);
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
      <Table columns={columns} style={{}} dataSource={data} />
      <Modal
        centered
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        width={500}
        footer={false}
      >
        <div className=" py-2 px-5">
          <p className=" py-2 mt-4 text-xl font-medium text-[#6D6D6D]">
            Add Facility
          </p>
          <Form className="w-full">
            <div className=" w-2/3">
              <p className="text-[#6D6D6D] py-1">Facility Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <Form.Item className="text-center mt-5">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Facilities;
