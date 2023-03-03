import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { Title } from "../../COMPONENTS/TITLE/Title";
import { link } from "../../Path";
import { setModifyUsers } from "../../REDUCERS/MODIFYUSERREDUCER/modifyuser.actions";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
import "./Modifyusers.css";
export const Modifyusers = () => {
  const titleData = {
    title: "MODIFY USERS",
    color: "black",
    fontsize: "60px",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modifyUsers = useSelector((state) => state.modifyUsers);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      if (!user.id) {
        fetchData();
      } else {
        fetchModifyUsers();
      }
      async function fetchData() {
        const res = await fetch(`${link}/tokenlogin`, {
          method: "post",
          headers: { "content-type": "application/json", authorization: token },
        });
        const data = await res.json();
        if (data && data.isadmin) {
          fetchModifyUsers();
          dispatch(setUser(data));
          return;
        }
        navigate("/app");
      }
      async function fetchModifyUsers() {
        const resp = await fetch(`${link}/modifyusers`);
        const data = await resp.json();
        dispatch(setModifyUsers(data.modifyusers));
      }
    } else {
      navigate("/adminlogin");
      return;
    }
    // eslint-disable-next-line
  }, []);
  document.getElementsByClassName("html-title")[0].innerText = "MODIFY-USERS";
  return (
    <div>
      <div className="modifyusers-nav">
        <div className="modifyusers-backbtn">
          <button
            onClick={() => {
              navigate("/adminpage");
            }}
          >
            <FaArrowLeft style={{ background: "none", fontSize: "larger" }} />
          </button>
        </div>
        <Title titleData={titleData} />
      </div>

      <Table data={modifyUsers} />
    </div>
  );
};
