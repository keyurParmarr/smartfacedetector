import React from "react";
import "./Title.css";
export const Title = (props) => {
  return (
    <div
      className="title-main"
      style={{
        color: `${props.titleData.color}`,
        fontSize: `${props.titleData.fontsize}`,
        marginTop: `${props.titleData.marginTop}`,
      }}
    >
      {props.titleData.title}
    </div>
  );
};
