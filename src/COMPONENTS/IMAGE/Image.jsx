import React from "react";
import { useContext } from "react";
import { UserContext } from "../../CONTEXT/User.context";
import "./Image.css";

export const Image = () => {
  let b = {
    width: "auto",
    height: "450px",
  };
  const { box, url } = useContext(UserContext);

  return (
    <div className="image-box">
      <style></style>
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
