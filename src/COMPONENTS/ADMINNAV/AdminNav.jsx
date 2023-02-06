import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";
import { Title } from "../TITLE/Title";
import "./AdminNav.css";

export const AdminNav = (props) => {
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  const navigate = useNavigate();
  const { seturl, setbox, setlocalCount, setuser, setmodifyusers, sethistory } =
    useContext(UserContext);
  const signOutHandler = async () => {
    const token = Cookies.get("token");
    try {
      // eslint-disable-next-line
      const res = await fetch(`http://18.182.53.70:5000/signout`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      toast.success("SIGNED OUT SUCCESSFULLY", toastStyle);
      seturl("");
      setbox([]);
      setuser({});
      setmodifyusers([]);
      sethistory([]);
      setlocalCount(0);
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
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
