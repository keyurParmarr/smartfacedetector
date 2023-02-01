import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Title } from "../../COMPONENTS/TITLE/Title";
import "./ForgotPassword.css";
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "0px",
  };
  const passwordHandler = async () => {
    const res = await fetch("http://localhost:5000/forgotpassword", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="forgotpassword-btn">
            <button
              className="forgotpassword-insidebtn"
              onClick={passwordHandler}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
