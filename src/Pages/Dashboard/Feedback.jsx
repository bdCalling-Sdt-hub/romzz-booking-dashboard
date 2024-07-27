import { useEffect, useRef, useState } from "react";
import { Input, Modal, Table } from "antd";
import Logo from "../../assets/user.png";
import { FiSearch } from "react-icons/fi";
import FeedbackModal from "../../Components/Dashboard/FeedbackModal";

const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: <img src={Logo} height={48} width={48} />,
    },

    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1238",

    user: {
      name: "Lily",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1237",

    user: {
      name: "Kathry",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1236",

    user: {
      name: "Priscilla",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1235",

    user: {
      name: "Claire",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1234",

    user: {
      name: "Irmar",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },

  {
    key: "#4",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#5",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#6",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#7",
    name: "Nadir",
    user: {
      name: "Ashutosh",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#8",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#9",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#10",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
  {
    key: "#11",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    feedback: "i see some problem",
    date: "01/01/2025",
  },
];

const Feedback = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> {user?.img} </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {user?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Feedbacks",
      dataIndex: "feedback",
      key: "feedback",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            paddingRight: 10,
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            className=" text-[#FFAC8F] font-medium"
          >
            View
          </button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };
  return (
    <div className="">
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
              All Feedbacks
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "370px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle"
              />
            </div>
          </div>
        </div>
        <div>
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
      </div>
      <FeedbackModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Feedback;
