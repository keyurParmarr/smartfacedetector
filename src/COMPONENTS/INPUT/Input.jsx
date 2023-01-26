import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../CONTEXT/User.context";
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
      return toast.error("PLEASE ENTER URL/LINK", toastStyle);
    }

    seturl(imgurl);
    const loadingToast = toast.loading("FETCHING DATA", toastStyle);
    const resp = await fetch("http://localhost:5000/imagebox", {
      method: "post",
      headers: { "content-type": "application/json" },
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
      {/* <div> */}
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
      {/* </div> */}
    </div>
  );
};
