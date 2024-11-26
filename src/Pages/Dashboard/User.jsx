import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserIdQuery, useGetUserPropertiesQuery } from '../../redux/apislices/DashboardSlices';
import { imageUrl } from '../../redux/api/apiSlice';
import { TfiLocationPin } from "react-icons/tfi";
const User = () => {
  const params = useParams()
  const id = params?.id
  const value = {
    id: id,
    type: "all"
  }
  const { data: user } = useGetUserIdQuery(id)
  const { data: properties } = useGetUserPropertiesQuery(value)
  const userData = user?.data;
  const image =  userData?.avatar?.startsWith("https") ? userData?.avatar:  `${imageUrl}${userData?.avatar}`;
  return (
    <div>
      <div className='grid grid-cols-12 gap-5 mt-5 '>
        <div className=' col-span-6 bg-white p-10'>
          <div className=" w-full flex justify-center items-center">
            <div className=" w-full">

              <div className="py-5 mx-auto text-center">
                <img className="w-36 h-32  mx-auto mb-2 rounded-lg" src={image} alt="" />
                <p className="text-lg font-semibold">User Information</p>
              </div>

              <div className="flex items-center  justify-center w-full gap-10 mb-3">
                <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                  Name:
                </p>
                <p className="text-[14px] w-2/3  text-[#737373]"> {userData?.fullName}</p>
              </div>

              <div className="flex items-center  justify-center w-full gap-10 mb-3">
                <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                  Email:
                </p>
                <p className="text-[14px] w-2/3  text-[#737373]">   {userData?.email}</p>
              </div>

              <div className="flex items-center  justify-center w-full gap-10 mb-3">
                <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                  Contact No:
                </p>
                <p className="text-[14px] w-2/3  text-[#737373]">   {userData?.phoneNumber}</p>
              </div>

              <div className="flex items-center  justify-center w-full gap-10 mb-3">
                <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                  Address:
                </p>
                <p className="text-[14px] w-2/3  text-[#737373]">   {userData?.permanentLocation?.address}</p>
              </div>


            </div>
            <p></p>
          </div>

        </div>

        <div className='col-span-6 bg-white p-10'>
          <p className=' text-2xl font-semibold py-3 '>{userData?.fullName}'s Properties</p>
          {properties?.data?.data?.map((property, index) => <div key={index} className="pb-2">
            <div
              className="p-2 rounded-lg flex gap-2 items-center pb-0"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >

              <div className="mb-4 h-[120px] w-[150px]  overflow-hidden">
                <img
                  alt="Property Image"

                  src={`${imageUrl}${property?.propertyImages[0]}`}
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 w-full transition-all duration-300"
                />
              </div>

              <div>
                <h1 className="text-primary font-semibold text-[20px] leading-5 pb-3">
                  {property.title}
                </h1>
                <div className="flex items-center justify-between">
                  <h1 className="text-primary font-semibold text-[18px] leading-5">
                    ${property.price}
                    <sub className="font-normal">/{property?.priceType}</sub>
                  </h1>
                </div>

                <div className="flex items-center gap-4">

                  <p
                    name={`Villa in ${property?.address?.split(" ")
                      .slice(1, 3)
                      .join(" ")}`}
                    className="font-bold text-[18px] leading-[27px] text-base"
                  />
                </div>
                <div className="flex items-center gap-1 mt-3">
                  <TfiLocationPin size={20} color="#5C5C5C" />
                  <p className=" text-sm leading-[21px] font-normal">
                    {property?.address}
                  </p>
                </div>
              </div>


            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default User;