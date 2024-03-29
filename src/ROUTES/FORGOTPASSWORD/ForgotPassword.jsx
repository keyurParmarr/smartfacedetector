import React, { useState } from "react";
import { TbLockSquare } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Title } from "../../COMPONENTS/TITLE/Title";
import { link } from "../../Path";
import "./ForgotPassword.css";
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setmsg] = useState("");
  const [bool, setbool] = useState(false);

  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "60px",
    marginTop: "0px",
  };

  const passwordHandler = async () => {
    if (bool) return;
    const res = await fetch(`${link}/forgotpassword`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setmsg(data.msg);
    setbool(true);
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
          <div className="forgot-icon">
            <TbLockSquare size={70} />
          </div>
          <label className="forgotpassword-label">TROUBLE LOGGING IN?</label>
          {bool ? (
            <span className="forgotpassword-msg">
              <i>{msg}</i>: <strong>{email}</strong>
            </span>
          ) : (
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="forgotpassword-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <div className="forgotpassword-btn">
            {msg.length === 0 && (
              <button
                id="forgot-btn"
                className="forgotpassword-insidebtn"
                onClick={passwordHandler}
              >
                SUBMIT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
