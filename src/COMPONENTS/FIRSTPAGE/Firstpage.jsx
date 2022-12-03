import React from "react";
import "./Firstpage.css";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { Title } from "../TITLE/Title";

export const Firstpage = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "cyan",
    fontsize: "36px",
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="firstpage-box">
        <div className="firstpage-data">
          <div style={{ marginLeft: "150px" }}>.</div>

          <Title titleData={titleData} />
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
