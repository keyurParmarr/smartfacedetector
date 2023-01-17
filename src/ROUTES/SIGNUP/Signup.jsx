import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import "./Signup.css";
import { UserContext } from "../../CONTEXT/User.context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { Loginsignupnav } from "../../COMPONENTS/LOGINSIGNUPNAV/Loginsignupnav";
import { useContext } from "react";
import { toast } from "react-toastify";

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "test",
    email: "test@mail.com",
    password: "Test12@#",
  });
  const { setuser } = useContext(UserContext);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const signupData = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const toastStyle = {
    theme: "colored",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    toast.dismiss();
    const loadingToast = toast.loading("CREATING ACCOUNT", toastStyle);
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await res.json();
      toast.update(loadingToast, {
        render: "ACCOUNT CREATED",
        type: "success",
        isLoading: false,
        ...toastStyle,
      });
      console.log(data);
      if (data.success) {
        localStorage.setItem("token", data.token);
        setuser(data);
        return navigate("/app");
      } else {
        toast.update(loadingToast, {
          render: data.message,
          type: "warning",
          isLoading: false,
          ...toastStyle,
        });
      }
    } catch (error) {
      console.log(error);
      toast.update(loadingToast, {
        render: "SOMETHING WENT WRONG",
        type: "error",
        isLoading: false,
        ...toastStyle,
      });
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

  return (
    <form onSubmit={signupHandler}>
      <Loginsignupcontainer>
        <div className="signup-title">
          <div
            style={{
              display: "inline-block",
              backgroundColor: "teal",
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            SIGNUP
          </div>
        </div>
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
        <div className="signup-button">
          <Button isLoading={false} type="submit">
            SIGNUP
          </Button>
        </div>
      </Loginsignupcontainer>
    </form>
  );
};
