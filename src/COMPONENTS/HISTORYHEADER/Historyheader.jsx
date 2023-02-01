import React, { useContext } from "react";
import "./Historyheader.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Title } from "../TITLE/Title";
import { UserContext } from "../../CONTEXT/User.context";
export const Historyheader = () => {
  const titleData = {
    title: "HISTORY",
    color: "black",
    fontsize: "38px",
  };
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="history-main">
        <div className="history-backbtn">
          <button
            onClick={() => {
              user.isadmin ? navigate("/modifyusers") : navigate("/app");
            }}
          >
            <FaArrowLeft
              style={{ background: "none", alignContent: "flex-start" }}
            />
          </button>
        </div>
        <Title titleData={titleData} />
        <div className="history-extradot"></div>
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
