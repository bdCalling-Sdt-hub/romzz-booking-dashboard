import { Modal } from "antd";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import user from "../../assets/user.png";

const UserModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={false}
      width={600}
    >
      <div className="flex justify-center items-center pe-6 ps-2 my-5">
        <div className=" w-full">
          <div className="py-5 mx-auto text-center">
            <img className="w-32 h-28  mx-auto mb-2" src={user} alt="" />
            <p className="text-lg font-semibold">User Information</p>
          </div>

          <div className=" px-14">
            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2 text-center text-[#252B42] font-medium ">
                Name:
              </p>
              <p className="text-[16px] w-1/2 text-end text-[#737373]">
                Naziya Sultana Mithila
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2 text-center text-[#252B42] font-medium ">
                Email:
              </p>
              <p className="text-[16px] w-1/2 text-end text-[#737373]">
                mithila@gmail.com
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2 text-center text-[#252B42] font-medium ">
                Contact No:
              </p>
              <p className="text-[16px] w-1/2 text-end text-[#737373]">
                +987986786879652
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2 text-center text-[#252B42] font-medium ">
                Address:
              </p>
              <p className="text-[16px] w-1/2 text-end text-[#737373]">
                Apt. 738 2086 Marianne Parks
              </p>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </Modal>
  );
};

export default UserModal;
