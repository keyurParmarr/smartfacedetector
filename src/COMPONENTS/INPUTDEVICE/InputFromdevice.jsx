import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";

export const InputFromdevice = () => {
  const [first, setfirst] = useState({});
  const { user, seturl, setbox, setuser, setlocalCount } =
    useContext(UserContext);
  const upload = (e) => {
    setfirst(e.target.files[0]);
    seturl(URL.createObjectURL(e.target.files[0]));
  };
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  console.log(first);
  const clearData = () => {
    seturl("");
    setbox([]);
    setlocalCount(0);
    document.getElementsByClassName("inputfromdevice-input")[0].value = "";
  };
  const send = async () => {
    let formdata = new FormData();
    formdata.append("image", first);
    if (!first.name) {
      return toast.error("PLEASE CHOOSE AN IMAGE", toastStyle);
    }
    const loadingToast = toast.loading("FETCHING DATA", toastStyle);
    const res = await fetch(`http://localhost:5000/uploadimage/${user.id}`, {
      method: "post",
      body: formdata,
    });
    const { data, userData, message } = await res.json();

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
      const { height, width } = document.getElementById("input");
      const boxData = data.outputs[0].data.regions.map((i) => {
        const clarfaiim = i.region_info.bounding_box;
        const w = Number(width);
        const h = Number(height);

        return {
          leftCol: clarfaiim.left_col * w,
          rightCol: w - clarfaiim.right_col * w,
          topRow: clarfaiim.top_row * h,
          bottomRow: h - clarfaiim.bottom_row * h,
        };
      });
      setuser(userData[0]);
      setlocalCount(boxData.length);
      setbox(boxData);
    }
  };
  return (
    <div className="inputfromdevice-box">
      <input
        type={"file"}
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
