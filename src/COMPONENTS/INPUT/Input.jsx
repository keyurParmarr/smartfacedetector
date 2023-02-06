import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";
import { imageProcessing } from "../../UTILS/Utils";
import "./Input.css";

export const InputComp = () => {
  const [imgurl, setimgurl] = useState("");
  const { seturl, setbox, user, setlocalCount, setuser } =
    useContext(UserContext);
  const handleClick = () => {
    setimgurl("");
  };

  const clearData = () => {
    seturl("");
    setimgurl("");
    setbox([]);
    setlocalCount(0);
  };
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  const fetchData = async () => {
    if (imgurl === "") {
      return toast.error("PLEASE ENTER IMAGE URL/LINK", toastStyle);
    }

    seturl(imgurl);
    const loadingToast = toast.loading("FETCHING DATA", toastStyle);
    const token = Cookies.get("token");
    const resp = await fetch("http://18.182.53.70:5000/imagebox", {
      method: "post",
      headers: { "content-type": "application/json", authorization: token },
      body: JSON.stringify({
        imgurl,
        id: user.id,
      }),
    });
    const { data, userData, message } = await resp.json();
    if (message) {
      setbox([]);
      toast.update(loadingToast, {
        ...toastStyle,
        type: "error",
        isLoading: false,
        render: message,
      });
    } else {
      toast.update(loadingToast, {
        ...toastStyle,
        type: "success",
        isLoading: false,
        render: "DATA FETCHED SUCCESSFULLY",
      });
      imageProcessing(setuser, setlocalCount, setbox, data, userData);
    }
  };

  return (
    <div className="input-grp">
      <InputGroup width={550}>
        <Input
          height={12}
          value={imgurl}
          pr="4.5rem"
          backgroundColor={"whitesmoke"}
          placeholder={"Enter Image Link"}
          onChange={(e) => {
            setimgurl(e.target.value);
          }}
        />
        <InputRightElement width="4.5rem">
          <Button
            height={8}
            marginTop={2}
            size="sm"
            onClick={handleClick}
            backgroundColor={"red.400"}
            fontSize={"large"}
          >
            &times;
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        height={"49px"}
        className="input-button"
        colorScheme={"green"}
        onClick={() => {
          fetchData();
        }}
      >
        DETECT
      </Button>
      <Button
        height={"49px"}
        className="input-clearbtn"
        colorScheme={"red"}
        onClick={() => {
          clearData();
        }}
      >
        CLEAR
      </Button>
    </div>
  );
};
