import React from "react";

export const Scroll = (props) => {
  let style = {
    border: "3px solid black",
    height: "780px",
  };
  if (props.scroll) {
    style.overflowY = "scroll";
  }

  return <div style={style}>{props.children}</div>;
};
