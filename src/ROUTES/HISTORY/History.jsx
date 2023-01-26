import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Historyheader } from "../../COMPONENTS/HISTORYHEADER/Historyheader";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { UserContext } from "../../CONTEXT/User.context";
import "./History.css";
export const History = () => {
  const { user, setuser, sethistory, history } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (!user.id) {
        fetchData();
      }
    } else {
      toast.warning("PLEASE LOGIN TO PROCEED", {
        theme: "colored",
      });
      navigate("/login");
      return;
    }

    async function fetchData() {
      const data = await fetch("http://localhost:5000/tokenlogin", {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      const user = await data.json();
      setuser(user);

      const resp = await fetch(`http://localhost:5000/history/${user.id}`);
      const history = await resp.json();
      sethistory(history.historyData);
      return;
    }

    const fetchHistory = async () => {
      const resp = await fetch(`http://localhost:5000/history/${user.id}`);
      const data = await resp.json();
      sethistory(data.historyData);
    };
    fetchHistory();
    // eslint-disable-next-line
  }, []);
  document.getElementsByClassName("html-title")[0].innerText = "HISTORY";
  return (
    <>
      <Historyheader />
      <Table data={history} />
    </>
  );
};
