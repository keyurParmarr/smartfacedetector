import React, { useContext } from "react";
import { UserContext } from "../../../CONTEXT/User.context";
import "./Information.css";

export const Information = () => {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div className="information-box">
      <div className="information-data">
        {value.user.name},
        <div>
          U have Detected {value.user.count} Images
          <div>& Ur Image contains {value.count} Faces</div>
        </div>
      </div>
    </div>
  );
};
