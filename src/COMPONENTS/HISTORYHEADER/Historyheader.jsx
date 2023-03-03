import React from "react";
import "./Historyheader.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Title } from "../TITLE/Title";
export const Historyheader = () => {
  const titleData = {
    title: "HISTORY",
    color: "black",
    fontsize: "60px",
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
            <FaArrowLeft style={{ background: "none", fontSize: "larger" }} />
          </button>
        </div>
        <Title titleData={titleData} />
        {/* <div className="history-extradot"></div> */}
      </div>
      <div className="history-info">Recent Searches</div>
      <div className="history-note">
        <span className="history-notedata">
          NOTE : HISTORY OF IMAGES DETECTED FROM THIS DEVICE WILL NOT BE SHOWN
        </span>
      </div>
    </>
  );
};
