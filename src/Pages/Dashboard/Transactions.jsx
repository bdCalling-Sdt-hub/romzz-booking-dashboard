import { useState } from "react";
import { DatePicker, Input, Select, Table } from "antd";
import Logo from "../../assets/img.png";
import { FiSearch } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import TransactionsModal from "../../Components/Dashboard/TransactionsModal";

const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1238",
    user: {
      name: "Lily",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Waiting",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1237",
    user: {
      name: "Kathry",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1236",
    user: {
      name: "Priscilla",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1235",
    user: {
      name: "Claire",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Waiting",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1234",
    user: {
      name: "Irmar",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Waiting",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1233",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1233",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1233",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Waiting",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
  {
    key: "#1233",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Published",
    date: "09 Dec 2024",
    price: "$290",
    payment: "$270",
  },
];
const Transactions = () => {
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
      title: "Booking Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "use  payment",
      dataIndex: "payment",
      key: "payment",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`${status === "Published" && "text-[#FF9773]"} ${
            status === "Waiting" && "text-[#00809E]"
          }  font-medium`}
        >
          {" "}
          {status}
        </p>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",

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
          >
            <IoEyeOutline size={22} className="" />
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

  //   dropdown data
  const items = [
    {
      label: "Published",
      value: "Published",
    },
    {
      label: "Waiting",
      value: "Waiting",
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
              Transactions
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "300px",
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

            <Select
              placeholder="Status"
              style={{
                width: 150,
                height: 40,
              }}
              //   onChange={handleChange}
              options={items}
            />
            <DatePicker style={{ height: "40px" }} />
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
              total: 85,
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
      <TransactionsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Transactions;
