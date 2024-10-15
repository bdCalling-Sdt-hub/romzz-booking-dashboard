import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import {  FaRegTrashAlt } from "react-icons/fa";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import SliderModal from "../../../Components/Dashboard/SliderModal";
import { useDeleteSliderMutation, useGetSliderQuery } from "../../../redux/apislices/DashboardSlices";
import { imageUrl } from "../../../redux/api/apiSlice";

const EditSlider = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [itemForEdit, setItemForEdit] = useState(null);
  const [page, setPage] = useState(1); 
  const {data:sliders ,refetch} = useGetSliderQuery(page) 
  console.log(sliders?.data);   
  const [deleteSlider] = useDeleteSliderMutation()

  const data =sliders?.data?.map((value , index) =>({
    key: index+1, 
    id:value?._id ,
    name: value?.title,
    slider_image:value?.image?.startsWith("https") ? value?.image : `${imageUrl}${value?.image}`    ,
  }))


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
        await deleteSlider(id).then((res) => {console.log(res) 
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

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Slider Image",
      dataIndex: "slider_image",
      key: "slider_image",
      align: "center",
      render: (img, record) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          > 
          <img src={img}  style={{ height:"50px" , width:"80px" , objectFit:"contain"}} />
          </div>
        );
      },
    },
    {
      title: "Slider Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <button
            onClick={() => {
              setOpenAddModel(true), setItemForEdit(record);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#00809E",
              background: "white",
            }}
          >
            <CiEdit size={25} />
          </button>
          <button
            onClick={() => handleDelete(record?.id)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "white",
              color: "red",
            }}
          >
            <FaRegTrashAlt size={20} />
          </button>
        </p>
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <div>
            <h3
              style={{
                color: "#00809E",
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              Edit Slider
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              onClick={() => setOpenAddModel(true)}
              style={{
                borderRadius: 8,
                background: "#00809E",
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "400",
              }}
              icon={<PlusOutlined />}
            >
              Add Slider
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            style={{}}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: (page)=>setPage(page) ,
              total: sliders?.data?.meta?.total,
             
            }}
          />
        </div>
      </div>

      <SliderModal
        itemForEdit={itemForEdit} 
        setItemForEdit={setItemForEdit}
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel} 
        refetch={refetch}
      />
    </div>
  );
};

export default EditSlider;
