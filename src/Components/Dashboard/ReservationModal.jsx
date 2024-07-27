import { Modal, Tabs } from "antd";
import React from "react";
import property from "../../assets/property.png";
const ReservationModal = ({ open, setOpen }) => {
  const items = [
    {
      key: "1",
      label: "Owner",
      children: (
        <div className=" w-full flex justify-center items-center">
          <div className="">
            <p className=" text-black font-medium text-center text-xl pb-4">
              {" "}
              Reservation
            </p>
            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Booking ID:
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
                Weekly Rent:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">$850</p>
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
      ),
    },

    {
      key: "2",
      label: "User",
      children: (
        <div className=" w-full flex justify-center items-center">
          <div className="">
            <p className=" text-black font-medium text-center text-xl pb-4">
              {" "}
              Reservation
            </p>
            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Booking ID:
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
                Tenant Name:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                Alexandra Daddario
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Weekly Rent:
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">$850</p>
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
      ),
    },
  ];

  return (
    <div>
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
          </div>

          <Tabs defaultActiveKey="1" centered items={items} />
        </div>
      </Modal>
    </div>
  );
};

export default ReservationModal;
