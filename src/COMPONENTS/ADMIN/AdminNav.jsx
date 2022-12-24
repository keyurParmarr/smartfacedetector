import React from "react";
import "./AdminNav.css";
import { Title } from "../TITLE/Title";
export const AdminNav = (props) => {
  return (
    <div className="admin-nav">
      <Title titleData={props.titleData} />
    </div>
  );
};
