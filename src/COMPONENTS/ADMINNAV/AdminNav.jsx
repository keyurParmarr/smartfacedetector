import React from "react";
import { Title } from "../TITLE/Title";
import "./AdminNav.css";

export const AdminNav = (props) => {
  return (
    <div className="admin-nav">
      <Title titleData={props.titleData} />
    </div>
  );
};
