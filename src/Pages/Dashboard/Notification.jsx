import { useEffect, useRef, useState } from "react";
import { Button, Pagination } from "antd";
import Swal from "sweetalert2";

const Notification = () => {
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "16px 0",
              alignItems: "center",
              background: "#e6f2f5",
              height: "80px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.10)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
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
                    fontWeight: "600",
                    color: "#555555",
                  }}
                >
                  A new order has arrived
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#A7A7A7",
                  }}
                >
                  8:00am, today
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#818181",
                }}
              >
                Babaji salon , order date 10 jun, 2024.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "16px 0",
              alignItems: "center",
              background: "white",
              height: "80px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.10)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
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
                    fontWeight: "600",
                    color: "#555555",
                  }}
                >
                  A new order has arrived
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#A7A7A7",
                  }}
                >
                  8:00am, today
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#818181",
                }}
              >
                Babaji salon , order date 10 jun, 2024.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "16px 0",
              alignItems: "center",
              background: "white",
              height: "80px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.10)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
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
                    fontWeight: "600",
                    color: "#555555",
                  }}
                >
                  A new order has arrived
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#A7A7A7",
                  }}
                >
                  8:00am, today
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#818181",
                }}
              >
                Babaji salon , order date 10 jun, 2024.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "16px 0",
              alignItems: "center",
              background: "white",
              height: "80px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.10)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
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
                    fontWeight: "600",
                    color: "#555555",
                  }}
                >
                  A new order has arrived
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#A7A7A7",
                  }}
                >
                  8:00am, today
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#818181",
                }}
              >
                Babaji salon , order date 10 jun, 2024.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "16px 0",
              alignItems: "center",
              background: "white",
              height: "80px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.10)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
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
                    fontWeight: "600",
                    color: "#555555",
                  }}
                >
                  A new order has arrived
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#A7A7A7",
                  }}
                >
                  8:00am, today
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#818181",
                }}
              >
                Babaji salon , order date 10 jun, 2024.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="text-center py-10">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div> */}
      </div>
    </div>
  );
};

export default Notification;
