import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { link } from "../../Path";
import { setBox } from "../../REDUCERS/BOXREDUCER/box.actions";
import { setLocalCount } from "../../REDUCERS/LOCALCOUNT/localcount.actions";
import { setUrl } from "../../REDUCERS/URLREDUCER/url.actions";
import { imageProcessing } from "../../UTILS/Utils";
import "./Input.css";

export const InputComp = () => {
  const dispatch = useDispatch();
  const [imgurl, setimgurl] = useState("");
  const user = useSelector((state) => state.user);
  const handleClick = () => {
    setimgurl("");
  };

  const clearData = () => {
    dispatch(setUrl(""));
    dispatch(setBox([]));
    setimgurl("");
    dispatch(setLocalCount(0));
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
    dispatch(setUrl(imgurl));
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
      dispatch(setBox([]));

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
      imageProcessing(dispatch, data, userData);
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
