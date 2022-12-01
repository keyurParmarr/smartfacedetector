import React from "react";
import "./About.css";
import gify from "./gify.gif";
export const About = () => {
  return (
    <div className="about-box">
      <div className="about-title">About</div>
      <div className="about-info">
        <p>
          This Face Detector will detect all the faces that an image contain in
          it.
        </p>
        <p>
          It also provide an provide an extra features like u can detect
          everything that an image contains in it.
        </p>
        <p>
          For example: If an image has any laptop, book or any other items then
          it will detect it and display its name.
        </p>
      </div>

      <img src={gify} className="about-img" alt="aboutImage" />
    </div>
  );
};
