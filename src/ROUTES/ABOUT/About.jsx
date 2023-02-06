import React, { useEffect } from "react";
import { Title } from "../../COMPONENTS/TITLE/Title";
import "./About.css";
import gify from "../../PICS/gify.gif";
export const About = () => {
  const titleData = {
    title: "ABOUT",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  document.getElementsByClassName("html-title")[0].innerText = "ABOUT";
  useEffect(() => {
    document.getElementsByClassName("imagetag")[0].style.opacity = "0";
    return opacity;
    function opacity() {
      if (document.getElementsByClassName("imagetag")[0])
        document.getElementsByClassName("imagetag")[0].style.opacity = "1";
    }
  }, []);
  return (
    <div className="about-box">
      <Title titleData={titleData} />
      <div className="about-info">
        <p>
          This Face Detector will detect all the faces that an image contain in
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
