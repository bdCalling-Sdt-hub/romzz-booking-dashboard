import { Col, Row } from "antd";
import React from "react";

import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoBarChartSharp } from "react-icons/io5";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total User",
      count: "20.10K",
      icon: <HiMiniUserGroup color="#00809E" size={24} />,
      bgColor: "#EFEFEF",
      textColor: "#00809E",
    },
    {
      name: "Total Rents",
      count: "920",
      icon: <LuCalendarCheck2 color="#FF9773" size={24} />,
      textColor: "#FF9773",
      bgColor: "#EFEFEF",
    },
    {
      name: "Total Revenue",
      count: "150.10K",
      icon: <IoBarChartSharp color="#00B047" size={24} />,
      textColor: "#00B047",
      bgColor: "#EFEFEF",
    },
    {
      name: "Monthly User",
      count: "20.10K",
      icon: <HiMiniUserGroup color="#00809E" size={24} />,
      bgColor: "#EFEFEF",
      textColor: "#00809E",
    },
    {
      name: "Monthly Rents",
      count: "920",
      icon: <LuCalendarCheck2 color="#FF9773" size={24} />,
      textColor: "#FF9773",
      bgColor: "#EFEFEF",
    },
    {
      name: "Monthly Revenue",
      count: "150.10K",
      icon: <IoBarChartSharp color="#00B047" size={24} />,
      textColor: "#00B047",
      bgColor: "#EFEFEF",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 items-center mt-7 mb-10">
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
                background: `${item.bgColor}`,
                width: "44px",
                height: "44px",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.icon}
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
                    color: `${item?.textColor}`,
                  }}
                >
                  {item.count} +
                </p>
              </div>
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
            height: "370px",
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
            height: "370px",
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
