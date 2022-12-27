import React from "react";
import { Historyheader } from "../../COMPONENTS/HISTORYHEADER/Historyheader";
import { Table } from "../../COMPONENTS/TABLE/Table";
import "./History.css";
export const History = () => {
  const links = [
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
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
