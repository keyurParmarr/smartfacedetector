import React, { useState, useContext } from "react";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../CONTEXT/User.context";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { toast } from "react-toastify";
import { useEffect } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "test@mail.com",
    password: "Test12@#",
  });
  const { setuser } = useContext(UserContext);
  const handleClick = () => setShow(!show);
  const loginData = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  document.getElementsByClassName("html-title")[0].innerText = "LOGIN";
  const toastStyle = {
    theme: "colored",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    toast.dismiss();
    const loadingToast = toast.loading("LOGGING IN", toastStyle);
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      toast.update(loadingToast, {
        render: "SUCCESSFULLY LOGGED IN",
        type: "success",
        isLoading: false,
        ...toastStyle,
      });
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
      toast.update(loadingToast, {
        render: "SOMETHING WENT WRONG",
        type: "error",
        isLoading: false,
        ...toastStyle,
      });
      console.log(error);
    }
  };
  useEffect(() => {
    document.getElementsByClassName("imagetag")[0].style.opacity = "0.5";
    return opacity;
    function opacity() {
      if (document.getElementsByClassName("imagetag")[0])
        document.getElementsByClassName("imagetag")[0].style.opacity = "1";
    }
  }, []);
  const style = {
    background: "transparent",
    borderRadius: "0",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid cyan",
    color: "cyan",
    marginBottom: "5px",
    marginTop: "5px",
    outline: "none",
  };

  return (
    <form onSubmit={loginHandler}>
      <Loginsignupcontainer>
        <div className="login-title">
          <div
            style={{
              display: "inline-block",
              backgroundColor: "green",
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            LOGIN
          </div>
        </div>
        <div className="login-label">EMAIL</div>
        <Input
          className="input"
          autoComplete="off"
          style={style}
          name={"email"}
          type={"email"}
          // required={"required"}
          backgroundColor={"whiteAlpha.500"}
          onChange={(e) => loginData(e)}
        />
        <div className="login-label">PASSWORD</div>
        <InputGroup size="md" marginTop="5px" marginBottom="5px">
          <Input
            className="input"
            autoComplete="off"
            style={style}
            name={"password"}
            // required={"required"}
            type={show ? "text" : "password"}
            backgroundColor={"whiteAlpha.500"}
            onChange={(e) => loginData(e)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" mt={"2"} onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="login-authbtn">
          <a href="/forgotpassword" className="login-atag">
            Forget Password?
          </a>
          <div>
            <input type="checkbox" className="login-checkbox" />
            <label>REMEMBER ME</label>
          </div>
        </div>

        <div className="login-button">
          <Button type="submit">LOGIN</Button>
        </div>
      </Loginsignupcontainer>
    </form>
  );
};
