import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Title } from "../TITLE/Title";
import "./AdminNav.css";
import { link } from "../../Path";
import { setUrl } from "../../REDUCERS/URLREDUCER/url.actions";
import { setBox } from "../../REDUCERS/BOXREDUCER/box.actions";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
import { setModifyUsers } from "../../REDUCERS/MODIFYUSERREDUCER/modifyuser.actions";
import { setHistory } from "../../REDUCERS/HISTORYREDUCER/history.actions";
import { setLocalCount } from "../../REDUCERS/LOCALCOUNT/localcount.actions";

export const AdminNav = (props) => {
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutHandler = async () => {
    const token = Cookies.get("token");
    try {
      // eslint-disable-next-line
      const res = await fetch(`${link}/signout`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      toast.success("SIGNED OUT SUCCESSFULLY", toastStyle);
      dispatch(setUrl(""));
      dispatch(setBox([]));
      dispatch(setUser({}));
      dispatch(setModifyUsers([]));
      dispatch(setHistory([]));
      dispatch(setLocalCount(0));
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  return (
    <div className="admin-nav">
      <Title titleData={props.titleData} />
      <div className="admin-outbtn">
        <Button
          style={{ backgroundColor: "#ff9800", height: "43px" }}
          onClick={signOutHandler}
        >
          <FaSignOutAlt style={{ marginRight: "7px", color: "black" }} /> SIGN
          OUT
        </Button>
      </div>
    </div>
  );
};
