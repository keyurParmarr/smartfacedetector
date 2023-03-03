import React from "react";
import { Title } from "../../COMPONENTS/TITLE/Title";
import "./About.css";
import gify from "../../PICS/gify.gif";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export const About = () => {
  const titleData = {
    title: "ABOUT",
    color: "black",
    fontsize: "60px",
  };
  document.getElementsByClassName("html-title")[0].innerText = "ABOUT";
  const navigate = useNavigate();
  return (
    <div className="about-box">
      <div className="abt">
        <div className="about-backbtn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <FaArrowLeft style={{ background: "none", fontSize: "larger" }} />
          </button>
        </div>
        <Title titleData={titleData} />
      </div>
      <div className="about-info">
        <p>
          This Face Detector App will detect all the faces if an image contains
          it.
        </p>
        <p>
          It also provides an extra features like u can detect url images as
          well as images from your device also.
        </p>
      </div>
      <img src={gify} className="about-img" alt="aboutImage" />
    </div>
  );
};
