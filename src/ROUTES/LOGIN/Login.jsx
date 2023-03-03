import React, { useState } from "react";
import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEyeSlash, FaEye, FaLock, FaEnvelopeOpen } from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({});
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
      const res = await fetch(`${link}/login`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      if (data.success) {
        toast.update(loadingToast, {
          render: "SUCCESSFULLY LOGGED IN",
          type: "success",
          isLoading: false,
          ...toastStyle,
        });
        Cookies.set("token", data.token, { expires: 1 });
        dispatch(setUser(data));
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
    const token = Cookies.get("token");
    if (token) {
      navigate("/app");
    }
    // eslint-disable-next-line
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
              border: "3px solid gray",
            }}
          >
            LOGIN
          </div>
        </div>
        <div className="login-label">EMAIL</div>
        <InputGroup>
          <InputLeftElement
            children={
              <FaEnvelopeOpen style={{ marginTop: "10px", color: "white" }} />
            }
          />
          <Input
            className="input"
            autoComplete="off"
            style={style}
            name={"email"}
            type={"email"}
            required={"required"}
            backgroundColor={"whiteAlpha.500"}
            onChange={(e) => loginData(e)}
          />
        </InputGroup>
        <div className="login-label">PASSWORD</div>
        <InputGroup size="md" marginTop="5px" marginBottom="5px">
          <InputLeftElement
            children={<FaLock style={{ marginTop: "10px", color: "white" }} />}
          />
          <Input
            className="input"
            autoComplete="off"
            style={style}
            name={"password"}
            required={"required"}
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
        </div>

        <div className="login-button">
          <Button type="submit" style={{ border: "2px solid rgb(14, 253, 6)" }}>
            LOGIN
          </Button>
        </div>
      </Loginsignupcontainer>
    </form>
  );
};
