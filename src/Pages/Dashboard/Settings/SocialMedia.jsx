import { Button, Form, Input } from "antd";
import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <h3
        className="py-4"
        style={{
          color: "#00809E",
          fontSize: 24,
          fontWeight: "500",
        }}
      >
        Social Media
      </h3>
      <div className="w-1/2">
        <Form layout="vertical" className=" mb-4">
          <Form.Item
            label={<p className=" font-semibold text-[18px] ">Facebook</p>}
          >
            <Input.TextArea
              rows={3}
              placeholder="Give link here"
              className=""
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <p> </p>
        </Form>

        <Form layout="vertical" className=" mb-4">
          <Form.Item
            label={<p className=" font-semibold text-[18px] ">Instagram</p>}
          >
            <Input.TextArea
              rows={3}
              placeholder="Give link here"
              className=""
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <p> </p>
        </Form>

        <Form layout="vertical" className=" mb-4">
          <Form.Item
            label={<p className=" font-semibold text-[18px] ">Linked In</p>}
          >
            <Input.TextArea
              rows={3}
              placeholder="Give link here"
              className=""
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <p> </p>
        </Form>
      </div>
    </div>
  );
};

export default SocialMedia;
