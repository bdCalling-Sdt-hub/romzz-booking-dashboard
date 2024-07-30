import React, { useState } from "react";

import { Form, Input } from "antd";
import { FaRegImage } from "react-icons/fa";

const OurStory = () => {
  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  return (
    <div className="  px-4 py-2 rounded-lg pb-10 ">
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
            Our Story
          </h3>
        </div>
        <div></div>
      </div>
      {/* input feild  */}
      <div>
        <Form layout="vertical" className=" ">
          <Form.Item
            className="w-full"
            name="Heading"
            label={
              <p className="text-lg font-semibold text-[#6D6D6D] ">Heading</p>
            }
          >
            <Input className="w-2/3 h-[40px]" />
          </Form.Item>

          <Form.Item
            className="w-full"
            name="discription"
            label={
              <p className="text-lg font-semibold text-[#6D6D6D] ">
                Discription
              </p>
            }
          >
            <Input.TextArea rows={4} className="resize-none w-2/3 h-[40px]" />
          </Form.Item>

          <div className=" w-2/3 mb-5 ">
            <p className="text-lg font-semibold text-[#6D6D6D] pb-2 "> Image</p>
            <div className="bg-white rounded-xl border">
              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 "
              >
                <Form.Item name="image">
                  <div className=" flex items-center justify-center">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
                    ) : (
                      <FaRegImage className=" text-9xl" />
                    )}
                  </div>
                  <div className=" hidden">
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
          </div>
        </Form>
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: 44,
            width: 150,
            backgroundColor: "#00809E",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default OurStory;
