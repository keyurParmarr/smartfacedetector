import React, { useState, useEffect, useContext } from "react";
import { Historyheader } from "../../COMPONENTS/HISTORYHEADER/Historyheader";
import { Table } from "../../COMPONENTS/TABLE/Table";
import { UserContext } from "../../CONTEXT/User.context";
import "./History.css";
export const History = () => {
  const { user } = useContext(UserContext);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const getHistoryData = async () => {
      const resp = await fetch(`http://localhost:5000/history/${user.id}`);
      const data = await resp.json();

      setLinks(data.historyData);
    };
    getHistoryData();
  }, []);

  return (
    <>
      <Historyheader />
      <Table data={links} />
    </>
  );
};
