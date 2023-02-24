import React, { useEffect } from "react";
import { Information } from "../../COMPONENTS/INFORMATION/Information";
import { Navigation } from "../../COMPONENTS/NAVIGATION/Navigation";
import { Image } from "../../COMPONENTS/IMAGE/Image";
import { useNavigate } from "react-router-dom";
import { InputTab } from "../../COMPONENTS/INPUTTABPANEL/InputTab";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";

export const App = () => {
  document.getElementsByClassName("html-title")[0].innerText =
    "SMART FACE DETECTOR | APP";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
      const res = await fetch(`${link}/tokenlogin`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      const data = await res.json();
      if (data.success) {
        dispatch(setUser(data));
        return;
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
