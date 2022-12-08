import React, { useState, useContext } from "react";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../../CONTEXT/User.context";
import { FaEyeSlash, FaEye } from "react-icons/fa";
export const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setMsg] = useState("");
  const value = useContext(UserContext);
  const handleClick = () => setShow(!show);

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      value.setuser(data);
      return navigate("/app");
    }
    setMsg("Invalid username or password");
  };

  return (
    <form onSubmit={loginHandler}>
      <div className="login-label">EMAIL</div>
      <Input
        className="input"
        style={{
          background: "transparent",
          borderRadius: "0",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          borderBottom: "1px solid cyan",
          outline: "none",
        }}
        // placeholder="Email"
        type={"email"}
        color={"cyan"}
        required={"required"}
        backgroundColor={"whiteAlpha.500"}
        marginTop="5px"
        marginBottom="5px"
        onChange={(e) => setemail(e.target.value)}
      />
      <div className="login-label">PASSWORD</div>
      <InputGroup size="md" marginTop="5px" marginBottom="5px">
        <Input
          className="input"
          style={{
            background: "transparent",
            borderRadius: "0",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom: "1px solid cyan",
            outline: "none",
          }}
          pr="4.5rem"
          required={"required"}
          type={show ? "text" : "password"}
          backgroundColor={"whiteAlpha.500"}
          color={"cyan"}
          onChange={(e) => setpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <div className="atag">
        <a href="/">Forget Password?</a>
      </div>
      <div className="login-warningMsg">{msg}</div>
      <div className="login-button">
        <Button type="submit" isLoading={false}>
          LOGIN
        </Button>
      </div>
    </form>
  );
};
