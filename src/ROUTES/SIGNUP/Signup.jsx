import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import "./Signup.css";
import { UserContext } from "../../CONTEXT/User.context";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { Loginsignupnav } from "../../COMPONENTS/LOGINSIGNUPNAV/Loginsignupnav";
import { useContext } from "react";

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "test",
    email: "test@mail.com",
    password: "Test12@#",
  });
  const { setuser } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const signupData = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("token", data.token);
        setuser(data);
        return navigate("/app");
      }
      setMsg("Account already exists");
    } catch (error) {
      console.log(error);
    }
  };
  const style = {
    background: "transparent",
    borderRadius: "0",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid cyan",
    outline: "none",
    marginBottom: "5px",
    marginTop: "5px",
    color: "cyan",
  };
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  return (
    <form onSubmit={signupHandler}>
      <Loginsignupnav titleData={titleData} />
      <Loginsignupcontainer>
        <div className="signup-title">SIGNUP</div>
        <div className="signup-label">NAME</div>
        <Input
          style={style}
          type="text"
          // required={"required"}
          name="username"
          autoComplete="off"
          backgroundColor={"whiteAlpha.500"}
          onChange={(e) => {
            signupData(e);
          }}
        />
        <div className="signup-label">EMAIL</div>
        <Input
          style={style}
          type={"email"}
          name="email"
          // required={"required"}
          autoComplete="off"
          backgroundColor={"whiteAlpha.500"}
          onChange={(e) => {
            signupData(e);
          }}
        />
        <div className="signup-label">PASSWORD</div>
        <InputGroup size="md" marginTop="5px" marginBottom="5px">
          <Input
            style={style}
            // required={"required"}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
            autoComplete="off"
            title="Password must contain at least 1 uppercase,1 lowercase, 1 special character, 1 number,and between 8-12 characters"
            type={show ? "text" : "password"}
            backgroundColor={"whiteAlpha.500"}
            name="password"
            onChange={(e) => {
              signupData(e);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" mt={"2"} onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="signup-warningMsg">{msg}</div>
        <div className="signup-button">
          <Button isLoading={false} type="submit">
            SIGNUP
          </Button>
        </div>
      </Loginsignupcontainer>
    </form>
  );
};
