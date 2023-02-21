import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";
import { boxConstant } from "../../REDUCERS/BOXREDUCER/box.constant";
import { urlConstant } from "../../REDUCERS/URLREDUCER/url.constant";
import { Title } from "../TITLE/Title";
import "./AdminNav.css";
import { link } from "../../Path";

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
  const { setlocalCount, setuser, setmodifyusers, sethistory } =
    useContext(UserContext);
  const signOutHandler = async () => {
    const token = Cookies.get("token");
    try {
      // eslint-disable-next-line
      const res = await fetch(`${link}/signout`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      toast.success("SIGNED OUT SUCCESSFULLY", toastStyle);
      dispatch({
        type: urlConstant.SETURL,
        payload: "",
      });
      dispatch({
        type: boxConstant.SETBOX,
        payload: [],
      });
      setuser({});
      setmodifyusers([]);
      sethistory([]);
      setlocalCount(0);
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  return (
    <div className="admin-nav">
      <div></div>
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
