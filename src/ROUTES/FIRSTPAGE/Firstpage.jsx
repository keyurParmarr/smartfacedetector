import React from "react";
import "./Firstpage.css";
import { Loginsignupnav } from "../../COMPONENTS/LOGINSIGNUPNAV/Loginsignupnav";

export const Firstpage = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };

  return (
    <>
      <div className="firstpage-box">
        <Loginsignupnav titleData={titleData} />
      </div>
    </>
  );
};
