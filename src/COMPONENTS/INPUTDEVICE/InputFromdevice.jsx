import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { link } from "../../Path";
import { setBox } from "../../REDUCERS/BOXREDUCER/box.actions";
import { setLocalCount } from "../../REDUCERS/LOCALCOUNT/localcount.actions";
import { setUrl } from "../../REDUCERS/URLREDUCER/url.actions";
import { imageProcessing } from "../../UTILS/Utils";
import "./InputFromdevice.css";
export const InputFromdevice = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState({});
  const user = useSelector((state) => state.user);
  const upload = (e) => {
    setfirst(e.target.files[0]);
    dispatch(setUrl(URL.createObjectURL(e.target.files[0])));
  };
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  const clearData = () => {
    dispatch(setUrl(""));
    dispatch(setBox([]));
    dispatch(setLocalCount(0));
    document.getElementsByClassName("inputfromdevice-input")[0].value = "";
  };
  const send = async () => {
    let formdata = new FormData();
    formdata.append("image", first);
    if (!first.name) {
      return toast.error("PLEASE CHOOSE AN IMAGE", toastStyle);
    }
    const loadingToast = toast.loading("FETCHING DATA", toastStyle);
    const token = Cookies.get("token");
    const res = await fetch(`${link}/uploadimage/${user.id}`, {
      method: "post",
      body: formdata,
      headers: { authorization: token },
    });
    const { data, userData, message } = await res.json();

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
    <div className="inputfromdevice-box">
      <input
        type="file"
        className="inputfromdevice-input"
        style={{ color: "white" }}
        onChange={upload}
      />
      <Button
        onClick={send}
        height={"43px"}
        className="input-button"
        colorScheme={"green"}
      >
        DETECT
      </Button>
      <Button
        height={"43px"}
        className="inputfromdevice-clearbtn"
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
