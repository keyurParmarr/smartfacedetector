import Cookies from "js-cookie";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { Title } from "../../COMPONENTS/TITLE/Title";
import { UserContext } from "../../CONTEXT/User.context";
import "./Modifyusers.css";
export const Modifyusers = () => {
  const titleData = {
    title: "Modify Users",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  const navigate = useNavigate();
  const { modifyusers, setmodifyusers, user, setuser } =
    useContext(UserContext);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      if (!user.id) {
        fetchData();
      }
      fetchModifyUsers();
      async function fetchData() {
        const data = await fetch("http://localhost:5000/tokenlogin", {
          method: "post",
          headers: { "content-type": "application/json", authorization: token },
        });
        const user = await data.json();
        setuser(user);
      }
      async function fetchModifyUsers() {
        const resp = await fetch("http://localhost:5000/modifyusers");
        const data = await resp.json();
        setmodifyusers(data.modifyusers);
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
              console.log(user);
              navigate("/adminpage");
            }}
          >
            <FaArrowLeft
              style={{ background: "none", alignContent: "flex-start" }}
            />
          </button>
        </div>
        <Title titleData={titleData} />
        <div className="modifyusers-extra"></div>
      </div>

      <Table data={modifyusers} />
    </div>
  );
};
