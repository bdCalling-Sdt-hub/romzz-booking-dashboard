import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { Link ,useNavigate,useParams  } from "react-router-dom";  
import {useGetSingleReqQuery, useUpdateApproveMutation, useUpdateRejectMutation} from "../../redux/apislices/DashboardSlices"
import moment from "moment";
import { Button } from "antd";
import Swal from "sweetalert2";
import { imageUrl } from "../../redux/api/apiSlice";


const Properties = () => { 
  const {id} = useParams()  
  const {data:properties} = useGetSingleReqQuery(id)  
  const propertiesInfo = properties?.data   

  const [updateApprove ] = useUpdateApproveMutation() 
  const [updateReject] = useUpdateRejectMutation()
 const navigate = useNavigate() 

 console.log(properties);

  const handleApprove = async()=>{
    await updateApprove(id).then((res) => {
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
          
            window.location.reload()
            navigate("/post-request") 
          })
    }else{
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

  const handleReject = async()=>{
    await updateReject(id).then((res)=>{
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload()
            navigate("/post-request") 
          })
    }else{
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
          <img className="w-80 h-44  mx-auto mb-2 rounded-md" src={propertiesInfo?.propertyImages[0]?.startsWith("https") ? propertiesInfo?.propertyImages[0] : `${imageUrl}${propertiesInfo?.propertyImages[0]}` } alt="" />
          <p className="text-2xl font-semibold py-1">
            {propertiesInfo?.title}
          </p>
          <p className="text-xl font-semibold text-[#00809E]">${propertiesInfo?.price} <span className="text-[14px]"> {propertiesInfo?.priceType === "day"
                        ? `/pd`
                        : propertiesInfo?.priceType === "week"
                        ? "/pw"
                        : propertiesInfo?.priceType === "month"
                        ? "/pm"
                        : "/py"}</span></p>
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
               {propertiesInfo?.createdBy?.fullName}
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Contact No
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.ownerNumber}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                About
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
        {propertiesInfo?.description}
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Address
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">
              {propertiesInfo?.address}
              </p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Size
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.size}/sf</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bathrooms
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.bathrooms}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bedrooms
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.bedrooms}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Kitchen
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.kitchen}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Balcony
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.balcony}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Bed Type
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.bedType}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Decorated
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.decorationType}</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-10 mb-3">
              <p className="text-[16px]  w-1/2  text-[#252B42] font-medium ">
                Property Type
              </p>
              <p className="text-[14px] w-1/2  text-[#737373]">{propertiesInfo?.propertyType}</p>
            </div>

          </div>
          <p></p>
        </div>

        <div className=" flex items-center  gap-16 justify-center my-3 mb-5">
        
            <div
              className="flex items-center gap-1 text-[16px] font-medium"
            >
              {" "}
              <p className="text-[#5C5C5C]">Move on : </p>{" "}
              <p className="text-[#00B047]">{moment(propertiesInfo?.moveOn).format('D MMM YYYY')}  </p>{" "}
            </div>
            
            <div
              className="flex items-center gap-1 text-[16px] font-medium"
            >
              {" "}
              <p className="text-[#5C5C5C]">Gender : </p>{" "}
              <p className="text-[#00B047]">{propertiesInfo?.allowedGender}  </p>{" "}
            </div> 

            <div
              className="flex items-center gap-1 text-[16px] font-medium">
              {" "}
              <p className="text-[#5C5C5C]">Guest type : </p>{" "}
              <p className="text-[#00B047]">{propertiesInfo?.guestType}  </p>{" "}
            </div> 

            <div
              className="flex items-center gap-1 text-[16px] font-medium"
            >
              {" "}
              <p className="text-[#5C5C5C]">Occupation : </p>{" "}
              <p className="text-[#00B047]">{propertiesInfo?.occupation}  </p>{" "}
            </div>

 
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-semibold py-2 "> Facilities</h1>
            <div className=" flex items-center justify-center  gap-8">
              {propertiesInfo?.facilities.map((value, index) => (
                <button
                  key={index}
                  className=" flex items-center gap-2 bg-[#FFDFD4] text-black w-[150px] h-[40px]  px-3  rounded-lg font-semibold"
                >
                  {" "}
                  <span> <img src={ value?.icon?.startsWith("https") ? value?.icon : `${imageUrl}${value?.icon}` } height={30}  width={30} alt="" /> </span> <span> {value?.name}</span>{" "}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-6 mt-8">
          <button  
           disabled={propertiesInfo?.status === "approve"} 
           className="disabled:bg-[#80C738]/50 bg-[#80C738] hover:bg-[#80C738]" 
           onClick={()=>handleApprove()}
          style={{ 
    
            color:"white" ,
            width:"90px" ,
            height:"40px" ,
            borderRadius:"10px"
          }}>
            Approve{" "}
          </button>

          <button  
          disabled={propertiesInfo?.status === "reject"} 
          className="disabled:bg-[#DF3232]/50 bg-[#DF3232]" 
          onClick={()=>handleReject()}
          style={{
            color:"white" ,
            width:"90px" ,
            height:"40px" ,
            borderRadius:"10px" ,
            
          }}
          >
            Reject{" "}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Properties;
