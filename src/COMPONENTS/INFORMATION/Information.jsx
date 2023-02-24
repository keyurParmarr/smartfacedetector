import React from "react";
import { useSelector } from "react-redux";
import "./Information.css";

export const Information = () => {
  const user = useSelector((state) => state.user);
  const localCount = useSelector((state) => state.localCount);
  return (
    <div className="information-box">
      <div className="information-data">
        {user.name},
        <div>
          You have Detected {user.entries} Images
          <div>& Your Image contains {localCount} Faces</div>
        </div>
      </div>
    </div>
  );
};
