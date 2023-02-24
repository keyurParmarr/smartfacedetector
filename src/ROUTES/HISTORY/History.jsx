import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Historyheader } from "../../COMPONENTS/HISTORYHEADER/Historyheader";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { link } from "../../Path";
import { setHistory } from "../../REDUCERS/HISTORYREDUCER/history.actions";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
export const History = () => {
  const user = useSelector((state) => state.user);
  const history = useSelector((state) => state.history);
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookies.get("token");
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
      const data = await fetch(`${link}/tokenlogin`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      const user = await data.json();
      dispatch(setUser(user));

      const resp = await fetch(`${link}/history/${user.id}`);
      const history = await resp.json();
      dispatch(setHistory(history.historyData));
      return;
    }

    const fetchHistory = async () => {
      const resp = await fetch(`${link}/history/${id}`);
      const data = await resp.json();
      dispatch(setHistory(data.historyData));
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
