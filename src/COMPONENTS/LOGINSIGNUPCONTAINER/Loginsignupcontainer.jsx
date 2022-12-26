import React from "react";
import "./Loginsignupcontainer.css";
export const Loginsignupcontainer = (props) => {
  return (
    <div className="loginSignup-section">
      <div className="loginSignup-container">
        <div className="loginSignup-panel">{props.children}</div>
      </div>
    </div>
  );
};
