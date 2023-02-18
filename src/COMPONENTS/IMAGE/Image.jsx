import React from "react";
import { useSelector } from "react-redux";
import "./Image.css";

export const Image = () => {
  let b = {
    width: "auto",
    height: "450px",
  };
  const url = useSelector((state) => {
    return state.url;
  });
  const box = useSelector((state) => {
    return state.box;
  });
  return (
    <div className="image-box">
      <div className="image-container">
        <img style={b} src={url} id="input" alt={""}></img>
        {box.map((data, i) => {
          return (
            <div
              key={i}
              className="image-data"
              style={{
                top: data.topRow,
                right: data.rightCol,
                bottom: data.bottomRow,
                left: data.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
