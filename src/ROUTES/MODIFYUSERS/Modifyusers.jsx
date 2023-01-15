import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
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
  const { modifyusers, setmodifyusers } = useContext(UserContext);
  useEffect(() => {
    async function fetchModifyUsers() {
      const resp = await fetch("http://localhost:5000/modifyusers");
      const data = await resp.json();
      console.log(data);
      setmodifyusers(data.modifyusers);
    }
    fetchModifyUsers();
  }, []);

  return (
    <div>
      <div className="Modifyusers-nav">
        <Title titleData={titleData} />
      </div>

      <Table data={modifyusers} />
    </div>
  );
};
