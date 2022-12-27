import React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../TITLE/Title";
import "./Loginsignupnav.css";

export const Loginsignupnav = (props) => {
  const style = {
    height: "45px",
    padding: "7px",
    color: "white",
    borderRadius: "10px",
  };
  const navigate = useNavigate();
  return (
    <div className="loginsignupnav-container">
      <div className="loginsignupnav-space">
        <button
          style={{ backgroundColor: "blue", ...style }}
          onClick={() => navigate("/about")}
        >
          ABOUT
        </button>
      </div>
      <Title titleData={props.titleData} />
      <div className="loginsignupnav-button">
        <button
          style={{ backgroundColor: "brown", ...style }}
          onClick={() => navigate("/adminlogin")}
        >
          ADMIN LOGIN
        </button>
        <button
          style={{ backgroundColor: "teal", ...style }}
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
        <button
          style={{ backgroundColor: "teal", ...style }}
          onClick={() => navigate("/signup")}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
};
