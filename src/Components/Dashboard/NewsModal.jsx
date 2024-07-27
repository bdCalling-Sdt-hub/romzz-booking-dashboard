import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";

const NewsModal = ({ itemForEdit, setOpenAddModel, openAddModel }) => {
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState(null);
  console.log(category);
  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;
          setImgFile(null);
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          >
            {itemForEdit ? "Update News" : "Add News"}
          </h1>
          <Form onFinish={onFinish} layout="vertical">
            <div>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
                label={<p className="text-[#6D6D6D]"> Title</p>}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="mt-4 mb-4">
              <p className="text-[#6D6D6D] py-1">Slider Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="image">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
                    ) : (
                      <FaRegImage className="text-2xl" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
            </div>

            <Form.Item
              name="content"
              label={<p className="text-[#6D6D6D]"> Content</p>}
            >
              <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item className="text-center mt-8">
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

export default NewsModal;
