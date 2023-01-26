import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../../COMPONENTS/ADMINNAV/AdminNav";
import { UserContext } from "../../CONTEXT/User.context";

import "./Adminpage.css";
export const Adminpage = () => {
  const { setuser, user } = useContext(UserContext);

  const navigate = useNavigate();
  const titleData = {
    title: "Admin Page",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (!user.id) {
        fetchData();
      }
      async function fetchData() {
        const data = await fetch("http://localhost:5000/tokenlogin", {
          method: "post",
          headers: { "content-type": "application/json", authorization: token },
        });
        const user = await data.json();
        setuser(user);
      }
    } else {
      navigate("/adminlogin");
      return;
    }
    // eslint-disable-next-line
  }, []);
  document.getElementsByClassName("html-title")[0].innerText = "ADMIN-PAGE";
  return (
    <div>
      <AdminNav titleData={titleData} />
      <div className="admin-box">
        <div className="admin-faceDetect">
          <div className="admin-text" onClick={() => navigate("/app")}>
            Admin-Face Detection
          </div>
        </div>
        <div className="admin-modifyUsers">
          <span className="admin-text" onClick={() => navigate("/modifyusers")}>
            Modify users
          </span>
        </div>
      </div>
    </div>
  );
};
