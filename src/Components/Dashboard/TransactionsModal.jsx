import { Modal } from "antd";
import React from "react";
import user from "../../assets/user.png";
import { FaDotCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
const TransactionsModal = ({ open, setOpen }) => {
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
            Transection Deatails
          </p>
          <div className=" flex items-center justify-between   ">
            {/* user  */}
            <div>
              <p className="text-[16px] font-medium pb-2 text-black">User</p>
              <img
                src={user}
                alt=""
                className=" w-20 h-20 rounded-full mb-2 "
              />
              <p className=" text-[18px] font-medium text-[#FFAC8F] mb-1">
                {" "}
                Chris Hemsworth
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                mahmud@gmail.com
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                {" "}
                76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                +099999897984754{" "}
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
                Christopher Nolan
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                mahmud@gmail.com
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                {" "}
                76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris
              </p>
              <p className="text-[14px] text-[#636363] pb-1">
                +099999897984754{" "}
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
              <span>Completed</span>
            </p>

            <p> </p>
          </div>
          <p className=" text-[#676F62] py-1 text-[16px]">#132547964</p>

          <div className=" flex items-center justify-between w-full px-1">
            <p className=" font-medium text-[14px] text-black w-1/2 ">
              {" "}
              10 may, 2024
            </p>

            <p className="flex items-center justify-end  text-red-500 font-medium text-[14px] w-1/2 text-end ">
              <span>
                <FaRegClock />{" "}
              </span>{" "}
              <span>10 may, 2024-10:00 Am</span>
            </p>
          </div>
          <p className=" my-4 border-b border-[#FFAC8F]"></p>

          <div className=" flex items-center justify-between w-full px-1 text-[#676F62]">
            <p className=" font-medium text-[14px]  w-1/2 ">
              {" "}
              2 Bedroom Apartment
            </p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">$240</p>
          </div>
          <p className="  border-b border-[#FFAC8F] my-4"></p>
          <div className=" flex items-center justify-between w-full px-1 text-[#734D2C] pb-2">
            <p className=" font-medium text-[14px]  w-1/2 "> Total</p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">$240</p>
          </div>

          <div className=" flex items-center justify-between w-full px-1 text-[#00B047]">
            <p className=" font-medium text-[14px]  w-1/2 "> Host earning</p>
            <p className=" font-medium text-[14px] w-1/2 text-end ">$200</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TransactionsModal;
