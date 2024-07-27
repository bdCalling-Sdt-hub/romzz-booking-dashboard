import { useEffect, useRef, useState } from "react";
import { Input, Table } from "antd";
import Swal from "sweetalert2";
import Logo from "../../assets/img.png";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import PostRequestModal from "../../Components/Dashboard/PostRequestModal";
import { IoEyeOutline } from "react-icons/io5";

const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: <img src={Logo} height={48} width={48} />,
    },
    status: "Pending",
    email: "mr101@mail.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Corona, Michigan",
  },
  {
    key: "#1238",
    status: "Pending",
    user: {
      name: "Lily",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xterris@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Great Falls, Maryland ",
  },
  {
    key: "#1237",
    status: "Approve",
    user: {
      name: "Kathry",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "irnabela@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Syracuse, Connecticut ",
  },
  {
    key: "#1236",
    status: "Pending",
    user: {
      name: "Priscilla",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "codence@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Lafayette, California",
  },
  {
    key: "#1235",
    status: "Pending",
    user: {
      name: "Claire",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "quasiah@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Pasadena, Oklahoma",
  },
  {
    key: "#1234",
    status: "Approve",
    user: {
      name: "Irmar",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xeno@yandex.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Lansing, Illinois",
  },
  {
    key: "#1233",
    status: "Approve",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    status: "Reject",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },

  {
    key: "#4",
    status: "Approve",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#5",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "asad@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#6",
    status: "Approve",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "fahim@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#7",
    name: "Nadir",
    user: {
      name: "Ashutosh",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
    status: "Approve",
  },
  {
    key: "#8",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#9",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rahman@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#10",
    status: "Reject",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rafsan@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
  {
    key: "#11",
    status: "Pending",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",

    selling: "500",
    balance: "600",
  },
];

const PostRequest = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false);
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`${status === "Pending" && "text-[#FF9773]"} ${
            status === "Approve" && "text-[#00809E]"
          } ${status === "Reject" && "text-[#e64237]"} font-medium`}
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
            gap: "20px",

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

          <div>
            <button onClick={() => handleDelete(record?.key)}>
              <MdOutlineDelete size={25} className=" text-red-500" />
            </button>
          </div>
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
              Post Request
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
      <PostRequestModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default PostRequest;
