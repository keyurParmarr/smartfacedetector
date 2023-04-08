import React from "react";
import { useSelector } from "react-redux";
import "./Information.css";

export const Information = () => {
  const user = useSelector((state) => state.user);
  const localCount = useSelector((state) => state.localCount);
  return (
    <div className="information-box">
      <div className="information-data">
        Welcome {user.name}
        <div>
          You have Detected {user.entries} Images
          {!localCount ? null : (
            <div>
              Your Image contains{" "}
              {localCount === 1 ? `${localCount} Face` : `${localCount} Faces`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
