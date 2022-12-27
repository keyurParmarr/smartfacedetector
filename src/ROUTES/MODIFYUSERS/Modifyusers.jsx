import React from "react";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { Title } from "../../COMPONENTS/TITLE/Title";

import "./Modifyusers.css";
export const Modifyusers = () => {
  const titleData = {
    title: "Modify Users",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  const data = [
    {
      id: 11,
      name: "keyur p",
      email: "parmarekyrur1104@mail.com",
      facesdetected: 10,
      history: "",
      remove: "remove",
      block: "block",
    },
  ];
  return (
    <div>
      <div className="Modifyusers-nav">
        <Title titleData={titleData} />
      </div>

      <Table data={data} />
    </div>
  );
};
