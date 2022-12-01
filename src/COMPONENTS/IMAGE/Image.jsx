import React from "react";
import "./Image.css";

export const Image = (props) => {
  let b = {
    width: "500px",
    height: "auto",
  };
  console.log(props.box);
  return (
    <div className="image-box">
      <div className="image-container">
        <img style={b} src={props.url} id="input" alt={""}></img>
        {props.box.map((data, i) => {
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
