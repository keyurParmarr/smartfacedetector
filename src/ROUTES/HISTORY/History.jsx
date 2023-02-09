import Cookies from "js-cookie";
import React, { useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Historyheader } from "../../COMPONENTS/HISTORYHEADER/Historyheader";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { UserContext } from "../../CONTEXT/User.context";
import { link } from "../../Path";
export const History = () => {
  const { user, setuser, sethistory, history } = useContext(UserContext);
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
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
      setuser(user);

      const resp = await fetch(`${link}/history/${user.id}`);
      const history = await resp.json();
      sethistory(history.historyData);
      return;
    }

    const fetchHistory = async () => {
      const resp = await fetch(`${link}/history/${id}`);
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
