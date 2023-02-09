import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Title } from "../TITLE/Title";
import "./Loginsignupnav.css";
import image from "../../PICS/mainimg.png";
import { UserContext } from "../../CONTEXT/User.context";
import Cookies from "js-cookie";
import { link } from "../../Path";

export const Loginsignupnav = (props) => {
  const { setuser } = useContext(UserContext);

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
        setuser(user);
        navigate("/adminpage");
        return;
      } else if (user.id) {
        setuser(user);
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
            <button
              style={{ backgroundColor: "purple", ...style }}
              onClick={() => navigate("/about")}
            >
              ABOUT
            </button>
          </div>
          <Title titleData={props.titleData} />
          <div className="loginsignupnav-button">
            <button
              style={{ backgroundColor: "brown", ...style }}
              onClick={() => navigate("/adminlogin")}
            >
              ADMIN LOGIN
            </button>
            <button
              style={{ backgroundColor: "teal", ...style }}
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
            <button
              style={{ backgroundColor: "#1877f2", ...style }}
              onClick={() => navigate("/signup")}
            >
              SIGNUP
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
