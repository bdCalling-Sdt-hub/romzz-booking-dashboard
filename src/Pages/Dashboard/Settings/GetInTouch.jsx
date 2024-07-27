import { Table } from "antd";
import React, { useState } from "react";
const data = [
  {
    key: 1,
    email: "mithila@gmail.com",
  },
  {
    key: 2,
    email: "mithila@gmail.com",
  },
  {
    key: 3,
    email: "mithila@gmail.com",
  },
  {
    key: 4,
    email: "mithila@gmail.com",
  },
  {
    key: 5,
    email: "mithila@gmail.com",
  },
  {
    key: 6,
    email: "mithila@gmail.com",
  },
  {
    key: 7,
    email: "mithila@gmail.com",
  },
  {
    key: 8,
    email: "mithila@gmail.com",
  },
];
const GetInTouch = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <h3
        className="py-4"
        style={{
          color: "#00809E",
          fontSize: 24,
          fontWeight: "500",
        }}
      >
        Get In Touch
      </h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          defaultCurrent: parseInt(page),
          onChange: handlePageChange,
          total: 15,
          showTotal: (total, range) =>
            `Showing ${range[0]}-${range[1]} out of ${total}`,
          defaultPageSize: 20,
          // defaultCurrent: 1,
          style: {
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            width: "100%",
            display: "flex",
            // gap: 10,
            // justifyContent: "space-between",
          },
        }}
      />
    </div>
  );
};

export default GetInTouch;
