import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import house from "../../assets/house.png";
import { RiEdgeNewFill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Move on :",
    value: "Instant",
  },
  {
    title: "Gender :",
    value: "Male/Female",
  },
  {
    title: "Guest type :",
    value: " Single",
  },
  {
    title: "Occupation :",
    value: "Student",
  },
];

const facilities = [
  {
    icon: (
      <p>
        <RiEdgeNewFill size={20} />
      </p>
    ),
    title: "Newest",
  },
  {
    icon: (
      <p>
        <AiOutlineWifi size={20} />
      </p>
    ),
    title: "Wi-Fi",
  },
  {
    icon: (
      <p>
        <MdOutlinePets size={20} />
      </p>
    ),
    title: "Pet allowed",
  },
  {
    icon: (
      <p>
        <FaFireAlt size={20} />
      </p>
    ),
    title: "Heating",
  },
  {
    icon: (
      <p>
        <TbAirConditioningDisabled size={20} />
      </p>
    ),
    title: "AC",
  },
  {
    icon: (
      <p>
        <AiOutlineWifi size={20} />
      </p>
    ),
    title: "Wi-Fi",
  },
  {
    icon: (
      <p>
        <MdOutlinePets size={20} />
      </p>
    ),
    title: "Pet allowed",
  },
  {
    icon: (
      <p>
        <FaFireAlt size={20} />
      </p>
    ),
    title: "Heating",
  },
];
const Properties = () => {
  return (
    <div>
      <Link to="/post-request">
        {" "}
        <button className="flex items-center gap-2 ">
          {" "}
          <span>
            {" "}
            <BiLeftArrowCircle size={22} />{" "}
          </span>{" "}
          <span> Back</span>
        </button>
      </Link>

      <div className=" py-8">
        <div className="py-5 mx-auto text-center">
          <img className="w-72 h-40  mx-auto mb-2" src={house} alt="" />
          <p className="text-2xl font-semibold py-1">
            Looking for a room in Sydney
          </p>
          <p className="text-lg font-semibold text-[#00809E]">$250/PW </p>
        </div>

        <div className=" w-full flex justify-center items-center">
          <div className=" w-2/3">
            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Owner Name
              </p>
              <p
                className="text-[14px] w-1/2 
                 text-[#737373]"
              >
                Mithila
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Contact No
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">98709870984</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                About
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                amet, ex Ut adipiscing sodales. massa placerat. Sed eget
                fringilla gravida nisi Donec eu eu tempor nulla, nulla, leo.
                faucibus tortor. Donec libero, elementum tincidunt id tincidunt
                dui faucibus turpis consectetur amet, nibh luctus nibh lacus, ex
                hendrerit fringilla fringilla est. lacus Nunc tincidunt
                dignissim, id nec Lorem dui Sed nibh id elementum non tincidunt
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Address
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Size
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">400/sf</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bathrooms
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">2</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bathrooms
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">1</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Kitchen
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">1</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Balcony
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">1</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bed Type
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">Sofa Bed</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Decorated
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">Furnished</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property Type
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">Apartment</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Balcony
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">2</p>
            </div>
          </div>
          <p></p>
        </div>

        <div className=" flex items-center  gap-16 justify-center my-3 mb-5">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-[16px] font-medium"
            >
              {" "}
              <p className="text-[#5C5C5C]"> {value.title} </p>{" "}
              <p className="text-[#00B047]"> {value?.value} </p>{" "}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-semibold py-2 "> Facilities</h1>
            <div className=" flex items-center justify-center  gap-8">
              {facilities.map((value, index) => (
                <button
                  key={index}
                  className=" flex items-center gap-2 bg-[#FFDFD4] text-black w-[150px] h-[40px]  px-3  rounded-lg font-semibold"
                >
                  {" "}
                  <span> {value?.icon}</span> <span> {value?.title}</span>{" "}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-6 mt-8">
          <button className=" bg-[#80C738] text-white w-[90px] h-[40px] rounded-lg ">
            Approve{" "}
          </button>

          <button className=" bg-[#DF3232] text-white w-[90px] h-[40px] rounded-lg ">
            Reject{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
