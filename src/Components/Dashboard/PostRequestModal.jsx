import { Modal } from "antd";
import React from "react";
import property from "../../assets/property.png";
const PostRequestModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={false}
      width={600}
    >
      <div className=" py-6">
        <div className="py-5 mx-auto text-center">
          <img className="w-32 h-28  mx-auto mb-2" src={property} alt="" />
          <p className="text-lg font-semibold">Property Information</p>
        </div>

        <div className=" w-full flex justify-center items-center">
          <div className="">
            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property ID:
              </p>
              <p
                className="text-[14px] w-1/2 
                 text-[#737373]"
              >
                76986879
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property Name:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                Two Bedroom Apartment for rent.
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property Type:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                Two Bedroom Apartment for rent.
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property Address
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Owner Name:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                Alexandra Daddario
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Availability:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">Available</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Weekly Rent:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">$850</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Total Bookings:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">14</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Contact No:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                (+33)7 00 55 59 27
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Email:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                irnabela@gmail.com
              </p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </Modal>
  );
};

export default PostRequestModal;
