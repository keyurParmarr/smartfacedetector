import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      return navigate("/app");
    }
    setMsg("Account already exists");
  };
  return (
    <div>
      <div className="signup-label">NAME</div>
      <Input
        style={{
          background: "transparent",
          borderRadius: "0",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          borderBottom: "1px solid cyan",
          outline: "none",
        }}
        type="text"
        marginBottom="5px"
        marginTop="5px"
        backgroundColor={"whiteAlpha.500"}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <div className="signup-label">EMAIL</div>
      <Input
        style={{
          background: "transparent",
          borderRadius: "0",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          borderBottom: "1px solid cyan",
          outline: "none",
        }}
        type={"email"}
        marginTop="5px"
        marginBottom="5px"
        backgroundColor={"whiteAlpha.500"}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <div className="signup-label">PASSWORD</div>
      <InputGroup size="md" marginTop="5px" marginBottom="5px">
        <Input
          style={{
            background: "transparent",
            borderRadius: "0",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom: "1px solid cyan",
            outline: "none",
          }}
          type={show ? "text" : "password"}
          backgroundColor={"whiteAlpha.500"}
          color={"black"}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <div className="signup-warningMsg">{msg}</div>
      <div className="signup-button">
        <Button isLoading={false} onClick={loginHandler}>
          SIGNUP
        </Button>
      </div>
    </div>
  );
};
