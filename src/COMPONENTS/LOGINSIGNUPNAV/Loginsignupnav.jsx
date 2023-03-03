import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Title } from "../TITLE/Title";
import "./Loginsignupnav.css";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
import i1 from "../../PICS/1.png";
import i2 from "../../PICS/2.jpg";
import i3 from "../../PICS/3.jpg";
import i4 from "../../PICS/4.jpg";
import SimpleImageSlider from "react-simple-image-slider";

export const Loginsignupnav = (props) => {
  const images = [{ url: i1 }, { url: i2 }, { url: i3 }, { url: i4 }];
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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="loginsignnav-box">
        <SimpleImageSlider
          width="100%"
          height="100vh"
          images={images}
          autoPlay={true}
          loop={true}
          autoPlayDelay={1.6}
          slideDuration={0.8}
          style={{
            position: "absolute",
            zIndex: -10,
          }}
        />
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
