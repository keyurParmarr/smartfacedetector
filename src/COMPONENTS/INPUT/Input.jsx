import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";
import { link } from "../../Path";
import { boxConstant } from "../../REDUCERS/BOXREDUCER/box.constant";
import { urlConstant } from "../../REDUCERS/URLREDUCER/url.constant";
import { imageProcessing } from "../../UTILS/Utils";
import "./Input.css";

export const InputComp = () => {
  const dispatch = useDispatch();
  const [imgurl, setimgurl] = useState("");
  const { user, setlocalCount, setuser } = useContext(UserContext);
  const handleClick = () => {
    dispatch({
      type: urlConstant.SETURL,
      payload: "",
    });
  };

  const clearData = () => {
    dispatch({
      type: urlConstant.SETURL,
      payload: "",
    });
    dispatch({
      type: boxConstant.SETBOX,
      payload: [],
    });
    setimgurl("");
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
    dispatch({
      type: urlConstant.SETURL,
      payload: imgurl,
    });
    const loadingToast = toast.loading("FETCHING DATA", toastStyle);
    const token = Cookies.get("token");
    const resp = await fetch(`${link}/imagebox`, {
      method: "post",
      headers: { "content-type": "application/json", authorization: token },
      body: JSON.stringify({
        imgurl,
        id: user.id,
      }),
    });
    const { data, userData, message } = await resp.json();
    if (message) {
      dispatch({
        type: boxConstant.SETBOX,
        payload: [],
      });
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
      imageProcessing(setuser, setlocalCount, dispatch, data, userData);
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
