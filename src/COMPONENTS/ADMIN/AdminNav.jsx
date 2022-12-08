import React from "react";
import "./AdminNav.css";
import { Title } from "../TITLE/Title";
export const AdminNav = () => {
  const titleData = {
    title: "Admin Panel-Login",
    color: "black",
    fontsize: "33px",
    marginTop: "10px",
  };
  return (
    <div className="admin-nav">
      <div className="admin-extradot">.</div>
      <Title titleData={titleData} />
      <div className="admin-profile"></div>
    </div>
  );
};
