import React, { useEffect } from 'react';
import { useGetSubscriberQuery, useSubscriberDetailsQuery } from '../../redux/apislices/DashboardSlices';
import { useState } from 'react';
import { Modal, Table } from 'antd';
import { imageUrl } from '../../redux/api/apiSlice';
import moment from 'moment';
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const Subscribers = () => {
  const [page, setPage] = useState(1)
  const { data: subscribers } = useGetSubscriberQuery(page);
  const pagePerSize = 10
  const [value, setValue] = useState(null);

  const id = new URLSearchParams(useLocation().search).get("id");
  const { data: details } = useSubscriberDetailsQuery(id);

  console.log(details)

  useEffect(() => {
    if (details?._id && details?.status) {
      setValue(details);
    }
  }, [details]);


  const data = subscribers?.data?.result?.map((value, index) => ({
    key: index + 1,
    userId: {
      name: value?.userId?.fullName,
      img: value?.userId?.avatar?.startsWith("https") ? value?.userId?.avatar : `${imageUrl}${value?.userId?.avatar}`,
      ...value?.userId
    },
    booking: moment(value?.createdAt).format("DD MMM YYYY"),
    price: value?.packageId?.price,
    status: value?.packageId?.title,
    packageId: { ...value?.packageId }
  }))


  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      render: (_, record, index) => <p>{((page - 1) * pagePerSize) + record?.key}</p>
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (_, record) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> <img src={record?.userId?.img} style={{ borderRadius: "100%", height: 40, width: 40 }} />  </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {record?.userId?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Booking Date",
      dataIndex: "booking",
      key: "booking",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "",
      render: (_, record) => (
        <FiEye size={24} onClick={() => setValue(record)} className="cursor-pointer" />
      )
    },
  ];

  return (
    <div className="">
      <div
        style={{
          padding: "10px",
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
              Subscribers
            </h3>
          </div>

        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              current: parseInt(page),
              total: subscribers?.data?.meta?.total,
              onChange: (page) => setPage(page)
            }}
          />
        </div>
      </div>

      <Modal
        open={value}
        footer={false}
        closeIcon={false}
        title={<div className='flex items-center justify-between px-4 pt-4'>
          <p>Subscriber Details</p>
          <IoClose className='cursor-pointer' size={22} onClick={() => setValue(null)} />
        </div>}
        onCancel={() => setValue(null)}
      >
        <div className='p-4 flex flex-col justify-between'>
          <div>
            <img
              src={value?.userId?.avatar?.startsWith("https") ? value?.userId?.avatar : `${imageUrl}${value?.userId?.avatar}`}
              alt=""
              style={{ width: 80, borderRadius: 12, margin: "0 auto", height: 80 }}

            />
            <p className='pt-2 flex items-center justify-between'>
              <span>Name: </span>
              <span>{value?.userId?.fullName}</span>
            </p>
            <p className='pt-1 flex items-center justify-between'>
              <span>Email: </span>
              <span>{value?.userId?.email}</span>

            </p>
            <p className='pt-1 flex items-center justify-between'>
              <span>Phone Number: </span>
              <span>{value?.userId?.phoneNumber}</span>

            </p>
          </div>


          <div className='mt-7'>
            <h1 className='font-semibold text-xl'>Package</h1>
            <p className='pt-2 flex items-center justify-between'>
              <span>Name: </span>
              <span>{value?.packageId?.title}</span>
            </p>
            <p className='pt-2  flex items-center justify-between'>
              <span>Price: </span>
              <span>${value?.packageId?.price}</span>
            </p>
            <p className='pt-2  flex items-center justify-between'>
              <span>Duration: </span>
              <span>{value?.packageId?.billingCycle}</span>
            </p>
            <p className='pt-2  flex items-center justify-between'>
              <span>Property Limit: </span>
              <span>{value?.packageId?.maxProperties}</span>
            </p>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Subscribers;