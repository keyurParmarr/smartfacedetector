import "./App.css";
import React, { useEffect, useContext } from "react";

import { Information } from "../../COMPONENTS/INFORMATION/Information";
import { Navigation } from "../../COMPONENTS/NAVIGATION/Navigation";
import { InputComp } from "../../COMPONENTS/INPUT/Input";
import { Image } from "../../COMPONENTS/IMAGE/Image";
import { UserContext } from "../../CONTEXT/User.context";
import { useNavigate } from "react-router-dom";
import { InputTab } from "../../COMPONENTS/INPUTTABPANEL/InputTab";

export const App = () => {
  document.getElementsByClassName("html-title")[0].innerText =
    "SMART FACE DETECTOR | APP";
  const { setuser, user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      if (!user.id) {
        fetchData();
      }
    } else {
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
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navigation />
      <Information />
      <InputTab />
      <Image />
    </>
  );
};
