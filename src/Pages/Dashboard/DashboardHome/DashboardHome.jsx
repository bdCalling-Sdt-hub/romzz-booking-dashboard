import { Col, Row } from "antd";
import React from "react";

import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoBarChartSharp } from "react-icons/io5";
import { useGetDashboardCardQuery } from "../../../redux/apislices/DashboardSlices";
import { Link } from "react-router-dom";

function DashboardHome() { 
  const {data:cardsValue} = useGetDashboardCardQuery() 
  const cardValue = cardsValue?.data


  const data = [
    {
      name: "Total User",
      count: Math.round(cardValue?.totalUsers),
    }, 

    {
      name: "Total Bookings",
      count:  Math.round(cardValue?.totalBookings)
      ,
    }, 

    {
      name: "Total Revenue",
      count:  Math.round(cardValue?.totalRevenue),
      link: "https://dashboard.stripe.com/test/balance/overview"
    }, 

    {
      name: "Today User",
      count:  Math.round(cardValue?.todayUsers),
    }, 

    {
      name: "Today Bookings",
      count:  Math.round(cardValue?.todayBookings) ,
    }, 

    {
      name: "Today Revenue",
      count:  Math.round(cardValue?.todayRevenue)
      ,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 items-center mt-7 mb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-10 "
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "#EFEFEF",
                width: "44px",
                height: "44px",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            > 
            {
              index === 0 ? <HiMiniUserGroup color="#00809E" size={24} /> : index === 1 ? <LuCalendarCheck2 color="#FF9773" size={24} /> : index === 2  ?<IoBarChartSharp color="#00B047" size={24} /> :  index === 3 ? <HiMiniUserGroup color="#00809E" size={24} /> : index === 4 ? <LuCalendarCheck2 color="#FF9773" size={24} /> : index === 5 ? <IoBarChartSharp color="#00B047" size={24} /> :""
            }
           
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontSize: "1.2em",
                  fontWeight: "400",
                  color: "#6A6D7C",
                }}
              >
                {item.name}
              </p>
              <div>
                <p
                  style={{
                    fontSize: "1.6em",
                    fontWeight: "600",
                    color: `${ index === 0 ? "#00809E" : index === 1 ? "#FF9773" : index === 2  ? "#00B047" :  index === 3 ? "#00809E" : index === 4 ? "#FF9773" : index === 5 ? "#00B047" :""}`,
                  }}
                >
                  {item.count}
                </p>
              </div>
              {
                item?.link &&
                <Link target="_blank" className="block text-[#675dff]" to={item?.link}>Stripe</Link>
              }
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "15px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <div
          className="bg-black"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "450px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <DailyOverviewChart />
        </div>
        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "450px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <TotalSellerChart />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
