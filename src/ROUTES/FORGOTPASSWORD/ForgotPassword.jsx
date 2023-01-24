import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Title } from "../../COMPONENTS/TITLE/Title";
import "./ForgotPassword.css";
export const ForgotPassword = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "0px",
  };
  document.getElementsByClassName("html-title")[0].innerText =
    "FORGOT PASSWORD";
  const navigate = useNavigate();
  return (
    <div>
      <div className="forgotpassword-nav">
        <div className="forgotpassword-backbtn">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            <FaArrowLeft
              style={{ background: "none", alignContent: "flex-start" }}
            />
          </button>
        </div>
        <Title titleData={titleData} />
        <div></div>
      </div>
      <div className="forgotpassword-box">
        <div className="forgotpassword-subbox">
          <label className="forgotpassword-label">FIND YOUR ACCOUNT</label>
          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="forgotpassword-input"
          />
          <div className="forgotpassword-btn">
            <button className="forgotpassword-insidebtn">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
