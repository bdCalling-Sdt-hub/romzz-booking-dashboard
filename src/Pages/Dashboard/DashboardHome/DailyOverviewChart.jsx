import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useGetRevenueChartQuery } from "../../../redux/apislices/DashboardSlices";

const DailyOverviewChart = () => {  
  const [year, setYear] = useState(2024); 
  const {data:revenues} = useGetRevenueChartQuery(year)  
  const revenuesData = revenues?.data

  const data = revenuesData?.map((value)=>({
    name: (value?.month).slice(0,3),
    uv: value?.totalRevenue,
  }))



  const items = [
    {
      label: 2024,
      key: "2024",
    },
    {
      label: 2025,
      key: "2025",
    },
    {
      label: 2026,
      key: "2026",
    },
    {
      label: 2027,
      key: "2027",
    },
    {
      label: 2028,
      key: "2028",
    },
    {
      label: 2029,
      key: "2029",
    },
    {
      label: 2030,
      key: "2030",
    },
  ];

  const onClick = ({ key }) => {
    setYear(key);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555555",
          }}
        >
          Total Revenue
        </p>
        <Dropdown menu={{ items, onClick }}>
          <p
            style={{
              // width: "79px",
              cursor: "pointer",
              color: "#717171",
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
            onClick={(e) => e.preventDefault()}
          >
            {year}
            <DownOutlined style={{ paddingLeft: "18px" }} color="#717171" />
          </p>
        </Dropdown>
      </div>
      <ResponsiveContainer width={"100%"} height={350}>
        <LineChart data={data} barGap={100}>
          <CartesianGrid horizontal vertical={false} />
          <XAxis
            dataKey="name"
            padding="gap"
            minTickGap={2}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <YAxis
            tickCount={15}
            width={40}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <Tooltip />
          <Line
            connectNulls
            type="linear"
            dataKey="uv"
            stroke="#FF9773"
            fill="#00809E"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyOverviewChart;
