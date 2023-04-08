import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import "./Signup.css";
import {
  FaEnvelopeOpen,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUserAlt,
} from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      const res = await fetch(`${link}/signup`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await res.json();
      if (data.success) {
        toast.update(loadingToast, {
          render: "ACCOUNT CREATED",
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
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/app");
    }
    // eslint-disable-next-line
  }, []);
  document.getElementsByClassName("html-title")[0].innerText = "SIGNUP";
  return (
    <form onSubmit={signupHandler}>
      <Loginsignupcontainer>
        <div className="signup-title">
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#1877f2",
              padding: "3px",
              borderRadius: "5px",
              border: "3px solid gray",
            }}
          >
            SIGN UP
          </div>
        </div>
        <div className="signup-label">NAME</div>
        <InputGroup>
          <InputLeftElement
            children={
              <FaUserAlt style={{ marginTop: "10px", color: "white" }} />
            }
          />
          <Input
            style={style}
            type="text"
            required={"required"}
            name="username"
            autoComplete="off"
            backgroundColor={"whiteAlpha.500"}
            onChange={(e) => {
              signupData(e);
            }}
          />
        </InputGroup>
        <div className="signup-label">EMAIL</div>
        <InputGroup>
          <InputLeftElement
            children={
              <FaEnvelopeOpen style={{ marginTop: "10px", color: "white" }} />
            }
          />
          <Input
            style={style}
            type={"email"}
            name="email"
            required={"required"}
            autoComplete="off"
            backgroundColor={"whiteAlpha.500"}
            onChange={(e) => {
              signupData(e);
            }}
          />
        </InputGroup>
        <div className="signup-label">PASSWORD</div>
        <InputGroup size="md" marginTop="5px" marginBottom="5px">
          <InputLeftElement
            children={<FaLock style={{ marginTop: "10px", color: "white" }} />}
          />
          <Input
            style={style}
            required={"required"}
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
          <Button
            isLoading={false}
            type="submit"
            style={{ border: "2px solid #1877f2" }}
          >
            SIGN UP
          </Button>
        </div>
      </Loginsignupcontainer>
    </form>
  );
};
