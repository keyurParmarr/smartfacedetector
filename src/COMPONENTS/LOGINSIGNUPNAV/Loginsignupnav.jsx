import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Title } from "../TITLE/Title";
import "./Loginsignupnav.css";
import image from "../../PICS/mainimg.png";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";

export const Loginsignupnav = (props) => {
  const dispatch = useDispatch();
  const style = {
    height: "45px",
    padding: "7px",
    color: "white",
    borderRadius: "10px",
  };

  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetchData();
    }
    async function fetchData() {
      const data = await fetch(`${link}/tokenlogin`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      const user = await data.json();

      if (user.id && user.isadmin) {
        dispatch(setUser(user));
        navigate("/adminpage");
        return;
      } else if (user.id) {
        dispatch(setUser(user));
        navigate("/app");
        return;
      }
    }
  }, []);

  return (
    <>
      <div className="loginsignnav-box">
        <img src={image} className="imagetag" alt="img" />
        <div className="loginsignupnav-container">
          <div className="loginsignupnav-space">
            <button style={style} onClick={() => navigate("/about")}>
              ABOUT
            </button>
          </div>
          <Title titleData={props.titleData} />
          <div className="loginsignupnav-button">
            <button onClick={() => navigate("/adminlogin")} style={style}>
              ADMIN LOGIN
            </button>
            <button style={style} onClick={() => navigate("/login")}>
              LOGIN
            </button>
            <button style={style} onClick={() => navigate("/signup")}>
              SIGNUP
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
