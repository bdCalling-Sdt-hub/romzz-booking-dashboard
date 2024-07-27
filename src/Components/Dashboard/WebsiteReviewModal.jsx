import { Modal, Rate } from "antd";
import React from "react";
import userImg from "../../assets/user.png";
const WebsiteReviewModal = ({ open, setOpen, getReview }) => {
  console.log(getReview);
  return (
    <div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={false}
        width={450}
      >
        <div className="py-7 px-10">
          <div className="mx-auto ">
            <img
              src={userImg}
              alt=""
              height={120}
              width={160}
              className="mx-auto"
            />
          </div>
          <div className="mt-5">
            <p className="text-[16px] font-semibold text-black py-1">Name:</p>
            <p className="text-[#A1A1A1] text-[16px] mb-4 ">
              {getReview?.name}
            </p>

            <p className="text-[16px] font-semibold text-black py-1">Rating:</p>
            <p className=" mb-4 ">
              <Rate disabled defaultValue={getReview?.rating} />{" "}
            </p>

            <p className="text-[16px] font-semibold text-black py-1">Name:</p>
            <p className="text-[#A1A1A1] text-[16px] ">{getReview?.reviews}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WebsiteReviewModal;
