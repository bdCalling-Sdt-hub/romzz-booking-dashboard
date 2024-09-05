import { Layout } from "antd";
import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import {
  FaBuildingUser,
  FaHouseMedical,
  FaRegAddressCard,
  FaRegNewspaper,
} from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { TbCategoryPlus } from "react-icons/tb";
import { FiUserPlus, FiLogOut, FiUsers } from "react-icons/fi";
import { VscBook, VscFeedback } from "react-icons/vsc";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";

import { BsBuildingAdd, BsFillBuildingsFill } from "react-icons/bs";
import { imageUrl } from "../../redux/api/apiSlice";
import { useGetProfileQuery } from "../../redux/apislices/AuthSlices";
import { useGetNotificationQuery, useUpdateReadNotificationMutation } from "../../redux/apislices/DashboardSlices";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [setting, setSetting] = useState(false);
  const { pathname } = useLocation(); 
  const {data:Notifications} = useGetNotificationQuery() 
  const totalNotification = Notifications?.data?.result?.filter(item => item?.isSeen === false).length 
const [updateReadNotification] = useUpdateReadNotificationMutation()
  const {data:AdminInfo} = useGetProfileQuery()   
  console.log(AdminInfo);
  const user  = AdminInfo?.data  
  const src = user?.avatar?.startsWith("https") ? user?.avatar : `${imageUrl}${user?.avatar}` 

 const handleUpdateNotification =async() =>{
 await updateReadNotification()
 }

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdOutlineDashboard size={24} />,
    },
    {
      title: "Post Request",
      path: "/post-request",
      icon: <BsBuildingAdd size={24} />,
    },

    {
      title: "Users",
      path: "/users",
      icon: <FiUsers size={24} />,
    },

    {
      title: "Reservations",
      path: "/reservations",
      icon: <FaRegAddressCard size={24} />,
    },
    {
      title: "Transactions",
      path: "/transactions",
      icon: <AiOutlineTransaction size={24} />,
    },
    {
      title: "Support",
      path: "/support",
      icon: <MdOutlineSupportAgent size={24} />,
    },
    {
      title: "News",
      path: "/news",
      icon: <FaRegNewspaper size={24} />,
    },

    {
      title: "Add admin",
      path: "/make-admin",
      icon: <FiUserPlus size={24} />,
    },

    {
      title: "Settings",
      path: "/setting",
      icon: <IoSettingsOutline size={24} />,
      option: true,
      optionsItems: [
        {
          title: "Edit Slider",
          path: "/edit-slider",
        },
        {
          title: "Our Story",
          path: "/our-story",
        },
        {
          title: "Terms & Condition",
          path: "/terms",
        },
        {
          title: "FAQ",
          path: "/faq",
        },
        {
          title: "Facilities",
          path: "/facilities",
        },
        {
          title: "Website Review",
          path: "/website-review",
        },
        {
          title: "Get In Touch",
          path: "/get-in-touch",
        },
        {
          title: "Social Media",
          path: "/social-media",
        },
      ],
    },

    {
      title: "Log out",
      path: "/login",
      icon: <FiLogOut size={24} />,
    },
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="15vw"
        // className=" bg-[#F1E1C2]"
        style={{
          // overflow: "auto",
          position: "fixed",
          height: "110vh",
          paddingBottom: "60px",
          // overflowX: "hidden",
          zIndex: 2,
          backgroundColor: "#fffff",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            width: "100%",
            // height: 60,
            padding: "0 0 10px 0",
          }}
        >
          <Link to="/">
            <img src={Logo} height="30px" />
          </Link>
        </div>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            height: "90%",
            marginTop: 0,
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
              {item.option ? (
                <Link
                  to={item.path}
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    onClick={() => {
                      setSetting(!setting);
                    }}
                    style={{
                      display: "flex",

                      color: setting ? "white" : "black",
                      alignItems: "flex-end",
                      margin: "auto  0 auto 0",
                      gap: "14px",
                      background: setting ? "#00809E" : "none",
                      width: "100%",
                      padding: "10px 10px",
                      borderRadius: "50px 5px 5px 50px",
                    }}
                  >
                    <div style={{ height: "24px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontSize: "14px",
                        textAlign: "center",
                        height: "fit-content",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      // marginTop: setting ? "5px" : 0,
                      // marginBottom: "-7px",
                    }}
                  >
                    {setting &&
                      item.optionsItems.map((optionItem, optionIndex) => (
                        <Link
                          to={optionItem.path}
                          key={optionIndex}
                          style={{
                            // width: "150px",
                            height: "34px",
                            // borderRadius: "0 10px 10px 0",
                            width: "100%",
                          }}
                        >
                          <Link
                            // className="mx-auto"
                            to={optionItem.path}
                            style={{
                              display: "flex",

                              color: "Black",
                              alignItems: "flex-end",
                              marginLeft: "15px",
                              // borderRadius: "100px 0px 0px 100px",
                            }}
                          >
                            <div
                              // className="text-center"
                              style={{
                                fontSize: "13px",

                                background:
                                  optionItem.path === pathname
                                    ? "#8AC5D2"
                                    : "white",
                                height: "fit-content",
                                borderRadius: "50px 5px 5px 50px",
                                color:
                                  optionItem.path === pathname
                                    ? "white"
                                    : "black",
                                marginTop: "10px",
                                width: "100%",
                                padding: "7px 7px",
                              }}
                            >
                              {optionItem.title}
                            </div>
                          </Link>
                        </Link>
                      ))}
                  </div>
                </Link>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "white" : "Black",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#00809E" : "none",
                    width: "100%",
                    padding: "9px 10px 9px 15px",
                    borderRadius:
                      item.path === pathname ? "50px 5px 5px 50px" : "none",
                  }}
                >
                  <div style={{ height: "22px" }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content",
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            height: "80px",
            zIndex: 1,
            padding: 0,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "75px",
            paddingLeft: "17vw",
          }}
        >
          <div
            style={{
              width: "220px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              justifyContent: "space-between",
            }}
          >
            <Link to="/notification">
              <div
                style={{
                  background: "#F2F2F2",
                  width: 45,
                  height: 45,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  position: "relative",
                }} 

                onClick={()=>handleUpdateNotification()}
              >
                <RiNotification2Line color="black" size={24} />

                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    position: "absolute",
                    top: 2,
                    right: 3,
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  {totalNotification}
                </div>
              </div>
            </Link>
            <Link
              to={"/admin-profile"}
              style={{
                height: "42px",
                cursor: "pointer",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px",
              }}
            >
              <img
                src={src}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "100%",
                  borderColor: "#00809E",
                  borderWidth: 2,
                }}
                alt=""
              />
              <h2
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "600",
                  width: 200,
                }}
              >
               {user?.fullName}
              </h2>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "85px",
            // marginBottom: "20px",
            marginLeft: "16%",
            // marginRight: "10px",

            overflow: "auto",
            padding: "12px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
