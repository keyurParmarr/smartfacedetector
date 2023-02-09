import React, { useEffect, useContext } from "react";
import { Information } from "../../COMPONENTS/INFORMATION/Information";
import { Navigation } from "../../COMPONENTS/NAVIGATION/Navigation";
import { Image } from "../../COMPONENTS/IMAGE/Image";
import { UserContext } from "../../CONTEXT/User.context";
import { useNavigate } from "react-router-dom";
import { InputTab } from "../../COMPONENTS/INPUTTABPANEL/InputTab";
import Cookies from "js-cookie";
import { link } from "../../Path";

export const App = () => {
  document.getElementsByClassName("html-title")[0].innerText =
    "SMART FACE DETECTOR | APP";
  const { setuser, user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      if (!user.id) {
        fetchData();
      }
    } else {
      navigate("/login");
      return;
    }

    async function fetchData() {
      const data = await fetch(`${link}/tokenlogin`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      const user = await data.json();
      if (user.success) {
        return setuser(user);
      }
      Cookies.remove("token");
      navigate("/login");
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
