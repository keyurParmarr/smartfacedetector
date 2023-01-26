import React, { useState, useContext, useEffect } from "react";
import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Loginsignupcontainer } from "../../COMPONENTS/LOGINSIGNUPCONTAINER/Loginsignupcontainer";
import { UserContext } from "../../CONTEXT/User.context";
import { toast } from "react-toastify";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(UserContext);
  const handleClick = () => setShow(!show);
  const toastStyle = {
    theme: "colored",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };
  document.getElementsByClassName("html-title")[0].innerText = "ADMIN-LOGIN";
  const loginHandler = async (e) => {
    e.preventDefault();
    toast.dismiss();
    const loadingToast = toast.loading("LOGGING IN", toastStyle);
    try {
      const res = await fetch("http://localhost:5000/adminlogin", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "admin@mail.com",
          password: "Admin12@#",
        }),
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
        return navigate("/adminpage");
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
    <>
      <form onSubmit={loginHandler}>
        <Loginsignupcontainer>
          <div className="login-title">
            <div
              style={{
                display: "inline-block",
                backgroundColor: "brown",
                padding: "3px",
                borderRadius: "5px",
              }}
            >
              ADMIN-LOGIN
            </div>
          </div>
          <div className="login-label">EMAIL</div>
          <Input
            className="input"
            autoComplete="off"
            style={style}
            value={"admin@mail.com"}
            name={"email"}
            type={"email"}
            // required={"required"}
            backgroundColor={"whiteAlpha.500"}
            onChange={(e) => setemail(e.target.value)}
          />
          <div className="login-label">PASSWORD</div>
          <InputGroup size="md" marginTop="5px" marginBottom="5px">
            <Input
              className="input"
              autoComplete="off"
              style={style}
              name={"password"}
              value={"Admin12@#"}
              // required={"required"}
              type={show ? "text" : "password"}
              backgroundColor={"whiteAlpha.500"}
              onChange={(e) => setpassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" mt={"2"} onClick={handleClick}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>

          <div className="login-button">
            <Button type="submit" isLoading={false}>
              LOGIN
            </Button>
          </div>
        </Loginsignupcontainer>
      </form>
    </>
  );
};
