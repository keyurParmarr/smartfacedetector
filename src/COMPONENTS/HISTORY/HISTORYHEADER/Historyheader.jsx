import React from "react";
import "./Historyheader.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Title } from "../../TITLE/Title";
export const Historyheader = () => {
  const titleData = {
    title: "HISTORY",
    color: "black",
    fontsize: "38px",
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="history-main">
        <div className="history-backbtn">
          <button
            onClick={() => {
              navigate("/app");
            }}
          >
            <FaArrowLeft
              style={{ background: "none", alignContent: "flex-start" }}
            />
          </button>
        </div>
        <Title titleData={titleData} />
        <div className="history-extradot">.</div>
      </div>
      <div className="history-info">Recent Searches</div>
    </>
  );
};
