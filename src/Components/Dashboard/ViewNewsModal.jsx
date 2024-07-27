import { Button, Form, Input, Modal } from "antd";
import React from "react";

const ViewNewsModal = ({ open, setOpen, getNews }) => {
  return (
    <div>
      <Modal
        centered
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <div className="mx-auto  w-[120px] my-6">
            <p> {getNews?.image} </p>
          </div>

          <Form
            layout="vertical"
            initialValues={{
              title: getNews?.name,
              content:
                "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves",
            }}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input Package Name",
                },
              ]}
              label={<p className="text-[#6D6D6D]"> News Title</p>}
            >
              <Input
                className="w-[100%] border outline-none px-3 py-[8px]"
                type="text"
              />
            </Form.Item>

            <Form.Item
              name="content"
              label={<p className="text-[#6D6D6D]"> News Content</p>}
            >
              <Input.TextArea rows={6} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ViewNewsModal;
