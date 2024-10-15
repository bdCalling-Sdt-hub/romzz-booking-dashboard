import { Modal } from "antd";
import React from "react";
import user from "../../assets/user.png";
import { FaDotCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
const TransactionsModal = ({ open, setOpen, modalData }) => {
  console.log(modalData);
  return (
    <div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={false}
        width={600}
      >
        <div className="px-7 py-8">
          <p className=" py-2 font-medium text-lg text-[#00809E] ">
            {" "}
            Transaction Details
          </p>
          <div className=" flex items-center justify-between   ">
            {/* user  */}
            <div>
              <p className="text-[16px] font-medium pb-2 text-black">User</p>
              <img
                src={modalData?.user?.img}
                alt=""
                className=" w-20 h-20 rounded-full mb-2 "
              />
              <p className=" text-[18px] font-medium text-[#FFAC8F] mb-1">
                {" "}
              {modalData?.user?.name}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
              {modalData?.user?.email}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                {" "}
                {modalData?.user?.location}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
              {modalData?.user?.phone}
              </p>
            </div>
            {/* host  */}
            <div>
              <p className="text-[16px] font-medium pb-2 text-black">Host</p>
              <img
                src={user}
                alt=""
                className=" w-20 h-20 rounded-full mb-2 "
              />
              <p className=" text-[18px] font-medium text-[#734D2C] mb-1">
                {" "}
                {modalData?.host?.name}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
              {modalData?.host?.email}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                {" "}
                {modalData?.host?.location}
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
              {modalData?.host?.phone}
              </p>
            </div>
          </div>
          <p className=" my-3 border-b border-[#A7A7A7]"></p>

          <div className=" flex items-center justify-between w-full px-1">
            <p className=" font-medium text-[16px] text-black w-1/2 ">
              {" "}
              Booking details
            </p>

            <p className="flex items-center justify-end gap-2 text-[#00B047] font-medium text-[16px] w-1/2 text-end ">
              <span>
                <FaDotCircle />{" "}
              </span>{" "}
              <span>{modalData?.status}</span>
            </p>

            <p> </p>
          </div>
          <p className=" text-[#676F62] py-1 text-[16px]">{modalData?.txtId}</p>

          <div className=" flex items-center justify-between w-full px-1">
            <p className=" font-medium text-[14px] text-black w-1/2 ">
              {" "}
              Booking Date
            </p>

            <p className="flex items-center justify-end  gap-1 text-red-500 font-medium text-[14px] w-1/2 text-end ">
              <span>
                <FaRegClock />{" "}
              </span>{" "}
              <span>{modalData?.date}</span>
            </p>
          </div>
          <p className=" my-4 border-b border-[#FFAC8F]"></p>

          <div className=" flex items-center justify-between w-full px-1 text-[#676F62]">
            <p className=" font-medium text-[14px]  w-1/2 ">
              {" "}
              Price
            </p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">${modalData?.price}</p>
          </div>
          <p className="  border-b border-[#FFAC8F] my-4"></p>
          <div className=" flex items-center justify-between w-full px-1 text-[#734D2C] pb-2">
            <p className=" font-medium text-[14px]  w-1/2 "> User  Payment</p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">${modalData?.payment}</p>
          </div>

          <div className=" flex items-center justify-between w-full px-1 text-[#00B047]">
            <p className=" font-medium text-[14px]  w-1/2 "> Host earning</p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">${modalData?.hostFee
            }</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TransactionsModal;
