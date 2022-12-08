import React from "react";
import { Button } from "@chakra-ui/react";
import { Title } from "../TITLE/Title";
import { useNavigate } from "react-router-dom";
export const LoginSignupNav = () => {
  const navigate = useNavigate();
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "36px",
  };

  return (
    <div className="loginSignup-title">
      <div className="extra-dot">.</div>
      <Title titleData={titleData} />
      <div className="admin-login">
        <Button
          height={"50px"}
          colorScheme={"green"}
          onClick={() => {
            navigate("/Adminlogin");
          }}
        >
          Admin-Login
        </Button>
      </div>
    </div>
  );
};
