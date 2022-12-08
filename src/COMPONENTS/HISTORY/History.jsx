import React from "react";
import { Table } from "../TABLE/Table";
import "./History.css";
import { Historyheader } from "./HISTORYHEADER/Historyheader";
export const History = () => {
  const links = [
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
  ];

  return (
    <>
      <Historyheader />
      <Table data={links} />
    </>
  );
};
