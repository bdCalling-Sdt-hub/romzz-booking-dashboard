import React, { useState } from "react";
import userImg from "../../assets/user.png";
import { FiSearch } from "react-icons/fi";
import { Input } from "antd";
import { IoSendSharp } from "react-icons/io5";

const { TextArea } = Input;
const messageList = [
  {
    id: 1,
    name: "Naziya Sultana",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 2,
    name: "Mithila",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 3,
    name: "Khushi Akter",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 4,
    name: "Naziya Sultana",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 5,
    name: "Naziya Sultana",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 6,
    name: "Naziya Sultana",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
  {
    id: 7,
    name: "Naziya Sultana",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: (
      <img
        src={userImg}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
    ),
  },
];

const messageContent = [
  {
    id: 1,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 2,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
  {
    id: 3,
    message: "there are so many amenities.",
    date: "27 April 2024",
  },
  {
    id: 4,
    message: "i want to book the room",
    date: "27 April 2024",
  },
  {
    id: 5,
    message: "sure.",
    date: "27 April 2024",
  },
  {
    id: 6,
    message: "how much for the room per week?",
    date: "27 April 2024",
  },
  {
    id: 7,
    message: "200$",
    date: "27 April 2024",
  },
];

const Support = () => {
  const [person, setPerson] = useState(null);
  const [personId, setpersonId] = useState(null);
  console.log(person);

  const handleMessage = (value) => {
    setPerson(value);
    setpersonId(value?.id);
  };
  return (
    <div className=" ">
      <h3
        style={{
          color: "#00809E",
          fontSize: 24,
          fontWeight: "500",
          marginBottom: "12px",
        }}
      >
        Messages
      </h3>

      <div className=" grid grid-cols-12 gap-10 h-[78vh] me-5">
        <div className=" col-span-3  bg-[#FCFCFC] rounded-xl px-2 py-4 ">
          {/* search  */}
          <div
            className="mx-auto"
            style={{
              width: "340px",
              height: "40px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <Input
              placeholder="Search..."
              prefix={<FiSearch size={14} color="#868FA0" />}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "14px",
              }}
              size="middle"
            />
          </div>

          {/* message list  */}
          {messageList.map((value, index) => (
            <div key={index} onClick={() => handleMessage(value)}>
              <div
                className={`flex justify-between  px-2 py-2 shadow-sm rounded-lg  shadow-[#6A6A6A] mb-5 ${
                  personId === value?.id ? "bg-[#E7EBED]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-1">
                  <p> {value?.image} </p>
                  <div className="flex-col gap-1">
                    <p className="text-[#12354E] font-medium text-[16px] ">
                      {" "}
                      {value?.name}{" "}
                    </p>
                    <p className="text-[#6A6A6A] text-[14px]"> {value?.text}</p>
                  </div>
                </div>
                <p className="text-[#6A6A6A] text-[15px]">{value?.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-9 bg-[#FCFCFC] rounded-xl p-2">
          {personId ? (
            <div>
              {/* header   */}
              <div className=" flex items-center gap-2 py-2 px-3">
                <p>{person?.image}</p>
                <p className=" text-[20px]">{person?.name} </p>
              </div>

              {/* content  */}
              <div className=" bg-[#E6F2F5]  w-full h-[72vh] rounded-lg relative  ">
                <div className=" py-6 px-8 overflow-y-auto">
                  {messageContent.map((value, index) => (
                    <div
                      key={index}
                      className={` flex mb-2 w-full  ${
                        index % 2 == 0
                          ? "items-end justify-end"
                          : "items-start justify-start"
                      } `}
                    >
                      <div
                        className={` w-1/3 px-4 py-3 flex-col gap-4 ${
                          index % 2 == 0
                            ? " bg-white rounded-t-xl rounded-bl-xl"
                            : " bg-[#E5E5E5]  rounded-t-xl rounded-br-xl"
                        }`}
                      >
                        <p className="">{value?.message} </p>
                        <p className="text-end text-[12px] text-[#918d8d]">
                          {" "}
                          {value?.date}{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* input  */}
                <div className=" absolute bottom-3 w-full ps-0">
                  <div className="flex items-center justify-center gap-2 ">
                    <textarea
                      className="w-[90%] h-[40px] resize-none py-2 rounded-l-full px-4 rounded-r-full"
                      placeholder="Type your message"
                      autoSize
                    />
                    <button className="h-[40px] w-[40px] bg-[#00809E]  text-white rounded-full flex justify-center items-center">
                      {" "}
                      <IoSendSharp size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center items-center">
              <h1 className="text-black text-lg font-semibold py-10">
                {" "}
                Start Chat....
              </h1>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
