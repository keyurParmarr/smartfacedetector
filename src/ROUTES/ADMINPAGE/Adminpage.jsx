import React from "react";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../../COMPONENTS/ADMINNAV/AdminNav";

import "./Adminpage.css";
export const Adminpage = () => {
  const navigate = useNavigate();
  const titleData = {
    title: "Admin Page",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  return (
    <div>
      <AdminNav titleData={titleData} />
      <div className="admin-box">
        <div className="admin-faceDetect">
          <span className="admin-text" onClick={() => navigate("/app")}>
            Admin-Face Detect
          </span>
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
