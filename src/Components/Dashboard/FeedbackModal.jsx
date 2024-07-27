import { Modal } from "antd";
import React from "react";
import user from "../../assets/user.png";

const FeedbackModal = ({ open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={false}
        width={450}
      >
        <div className=" py-5 px-9">
          <div className="mx-auto">
            <img
              src={user}
              alt=""
              height={60}
              width={120}
              className=" mx-auto"
            />
          </div>
          <div className=" mt-4">
            <p className=" font-medium text-black text-[16px] pb-1">Name</p>
            <p className=" pb-3 text-[#A1A1A1] ">Naziya Sultana Mithila</p>

            <p className=" font-medium text-black text-[16px] pb-1">Mail</p>
            <p className=" pb-3 text-[#A1A1A1] ">Mithila@gmail.com</p>

            <p className=" font-medium text-black text-[16px] pb-1">Date</p>
            <p className=" pb-3 text-[#A1A1A1] ">9 Dec 2024</p>

            <p className=" font-medium text-black text-[16px] pb-1">Time</p>
            <p className=" pb-3 text-[#A1A1A1] ">09: 00 AM</p>

            <p className=" font-medium text-black text-[16px] pb-1">Review</p>
            <p className=" pb-3 text-[#A1A1A1] ">its so nice app</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
