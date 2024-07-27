import { Form, Input, Modal, Select } from "antd";
import React from "react";
const { Option } = Select;

const AdminModal = ({ openAddModel, setOpenAddModel }) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => {
        // null;

        setOpenAddModel(false);
      }}
      width={500}
      footer={false}
    >
      <div className="p-6  mt-4">
        <h1
          className="font-semibold text-[#00809E] text-xl"
          style={{ marginBottom: "12px" }}
        >
          {`Add  Admin`}
        </h1>
        <Form onFinish={onFinish}>
          <div>
            <p className="text-[#6D6D6D] py-1">Name</p>
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
          <div>
            <p className="text-[#6D6D6D] py-1">Email </p>
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

          <div className="mt-5">
            <p className="text-[#6D6D6D] py-1">Password </p>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input Package Name",
                },
              ]}
            >
              <Input.Password
                className="w-[100%] border outline-none px-3 py-[10px]"
                type="text"
              />
            </Form.Item>
          </div>

          <div className="text-center mt-6">
            <button className="bg-[#00809E] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
              create Profile
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AdminModal;
