import React from "react";
import "./Firstpage.css";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";

export const Firstpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="firstpage-box">
        <div className="firstpage-data">
          <div>.</div>
          <h1 className="firstpage-infotitle">SMART FACE DETECTOR</h1>

          <div>
            <Button
              marginTop={"3"}
              marginRight={"2.5"}
              colorScheme="teal"
              size="md"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Button>
            <Button
              marginTop={"3"}
              marginRight={"2.5"}
              colorScheme="teal"
              size="md"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login/Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
