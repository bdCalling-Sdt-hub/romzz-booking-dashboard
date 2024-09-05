import { Form, Input, Modal, Table, Button, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import FaqModal from "../../../Components/Dashboard/FaqModal";
import { useDeleteFaqMutation, useGetFaqQuery } from "../../../redux/apislices/DashboardSlices";
import Swal from "sweetalert2";


const FAQ = () => {
  const [openAddModel, setOpenAddModel] = useState(false); 
  const [modalData , setModalData] = useState()
const {data:faq , refetch} = useGetFaqQuery()   
console.log(faq); 
const [deleteFaq] = useDeleteFaqMutation()
const faqInfo = faq?.data    

const handleDelete = async(id) => { 
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteFaq(id).then((res) => {console.log(res) 
if(res?.data?.success){
Swal.fire({
  text: res?.data?.message,
  icon: "success",
  showConfirmButton: false,
  timer: 1500,
}).then(() => {
  refetch();
});
}else {
Swal.fire({
  title: "Oops",
  text: res?.error?.data?.message,
  icon: "error",
  timer: 1500,
  showConfirmButton: false,
});
}

      })
    }
  });
};

console.log(faqInfo);

  return (
    <div className="  px-3 py-2 rounded-lg">
      <div style={{ margin: "24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h3
            style={{
              color: "#00809E",
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            Frequently Asked Questions
          </h3>
          <button
            onClick={() => setOpenAddModel(true)}
            style={{
              borderRadius: "4px",
              color: "#F2F2F2",
              backgroundColor: "#00809E",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              padding: "10px 20px",
              fontWeight: "500",
            }}
          >
            <FaPlus
              style={{
                marginTop: "-2px",
              }}
            />
            Add FAQ
          </button>
        </div>
      </div>
      <div className="bg-white py-6 px-4 rounded-md">
        {faqInfo?.map((item, index) => (
          <div key={index} className="flex justify-between items-start gap-4 ">
            <div className="mt-3">
              <GoQuestion color="#00809E" size={25} />
            </div>
            <div className="w-full ">
              <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 bg-slate-50">
                <span className=" flex-1 "> {item?.question}</span>
              </p>
              <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 bg-slate-50">
                <p className="text-[#919191] leading-[24px] mb-6 ">
               {item?.answer}
                </p>
              </div>
            </div>
            <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
              <CiEdit
                onClick={() => {
                  setOpenAddModel(true); 
                  setModalData(item)
                }}
                className="text-2xl cursor-pointer text-[#00809E]"
              />
              <RxCross2
                onClick={() => {
                  handleDelete(item?._id);
                }}
                className="text-2xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      <FaqModal setOpenAddModel={setOpenAddModel} openAddModel={openAddModel} modalData={modalData} setModalData={setModalData} refetch={refetch} />
    </div>
  );
};

export default FAQ;
