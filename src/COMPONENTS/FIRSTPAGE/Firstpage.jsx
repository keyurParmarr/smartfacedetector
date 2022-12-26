import React from "react";
import "./Firstpage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Title } from "../TITLE/Title";

export const Firstpage = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  const style = {
    height: "45px",
    padding: "7px",
    color: "white",
    borderRadius: "10px",
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="firstpage-box">
        <div className="firstpage-data">
          <div style={{ marginLeft: "300px" }}></div>

          <Title titleData={titleData} />
          <div className="loginsignupnav-button">
            <button
              style={{ backgroundColor: "brown", ...style }}
              onClick={() => navigate("/admin")}
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
      </div>
    </>
  );
};
