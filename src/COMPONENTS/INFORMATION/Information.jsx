import React, { useContext } from "react";
import { UserContext } from "../../CONTEXT/User.context";
import "./Information.css";

export const Information = () => {
  const { user, localCount } = useContext(UserContext);
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
