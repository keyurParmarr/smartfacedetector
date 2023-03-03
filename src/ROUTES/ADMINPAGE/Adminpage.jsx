import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../../COMPONENTS/ADMINNAV/AdminNav";
import { link } from "../../Path";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
import "./Adminpage.css";
export const Adminpage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleData = {
    title: "ADMIN PAGE",
    color: "black",
    fontsize: "60px",
    marginTop: "10px",
  };
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      if (!user.id) {
        fetchData();
      }
      async function fetchData() {
        const data = await fetch(`${link}/tokenlogin`, {
          method: "post",
          headers: { "content-type": "application/json", authorization: token },
        });
        const user = await data.json();
        if (user && user.isadmin) {
          dispatch(setUser(user));
          return;
        }
        navigate("/app");
      }
    } else {
      navigate("/adminlogin");
      return;
    }
    // eslint-disable-next-line
  }, []);
  document.getElementsByClassName("html-title")[0].innerText = "ADMIN-PAGE";
  return (
    <div>
      <AdminNav titleData={titleData} />
      <div className="admin-box">
        <div className="admin-faceDetect">
          <div className="admin-text" onClick={() => navigate("/app")}>
            Admin-Face Detection
          </div>
        </div>
        <div className="admin-modifyUsers">
          <span className="admin-text" onClick={() => navigate("/modifyusers")}>
            Modify users
          </span>
        </div>
      </div>
    </div>
  );
};
