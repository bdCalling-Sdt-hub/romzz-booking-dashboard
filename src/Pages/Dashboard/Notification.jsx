
import { Button, Pagination } from "antd";
import { useGetNotificationQuery, useUpdateReadAllNotificationMutation } from "../../redux/apislices/DashboardSlices";
import moment from "moment";
import { useState } from "react";

const Notification = () => {  
  const [page, setPage] = useState(1)
  const {data:notifications} = useGetNotificationQuery(page)   
  const [updateReadAllNotification] = useUpdateReadAllNotificationMutation()

  console.log(notifications); 

  const handleReadAll = async()=>{

    await updateReadAllNotification().then((res)=>{
      console.log(res);
    })
  }
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
                fontSize: 22,
                fontWeight: "500",
              }}
            >
              Notifications
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button 
            onClick={()=>handleReadAll()}
              style={{
                height: "40px",

                borderRadius: "8px",
                border: "2px solid #00809E",

                background: "white",

                color: "#00809E",
                fontWeight: "400",
                fontSize: 14,
              }}
            >
              <span>Read all</span>
            </Button>
          </div>
        </div>
        <div>
          {
            notifications?.data?.result?.map((value , index ) =>  
          <div key={index} className={ ` ${value?.isRead ? "bg-white" : "bg-[#e6f2f5]"  } shadow-lg p-4 rounded-lg    `} > 
              <div 
          className=" flex  justify-between "
          > 
            <p
              style={{
                display: "flex",
                gap: "40px",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#555555",
                }}
              >
             {value?.message}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#A7A7A7",
                }}
              >
              {moment(value?.createdAt).format('D MMM YYYY , hh:mm a')}
              </span>
            </p> 

            <p className=" underline underline-offset-4 text-[#00809E] ">view</p>
     
          </div>
          </div>
            )
          }
           
     
        </div>
        <div className="text-center py-10"> 
          {
          notifications?.data?.result?.length >= 8 ? <Pagination   align="end"
          defaultCurrent={page} 
          total={notifications?.data?.meta?.total} 
          onChange={(page)=>setPage(page)} /> 
          : ""
          }
          
        </div>
      </div>
    </div>
  );
};

export default Notification;
