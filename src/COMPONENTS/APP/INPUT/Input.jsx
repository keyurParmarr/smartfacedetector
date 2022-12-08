import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { UserContext } from "../../../CONTEXT/User.context";
import "./Input.css";

export const InputComp = (props) => {
  const [link, setLink] = useState("");
  const value = useContext(UserContext);
  const handleClick = () => {
    setLink("");
  };
  const fetchData = async () => {
    const resp = await fetch("http://localhost:5000/imagebox", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link }),
    });
    const { data } = await resp.json();
    const boxData = data.outputs[0].data.regions.map((i) => {
      const clarfaiim = i.region_info.bounding_box;
      const ima = document.getElementById("input");
      const w = Number(ima.width);
      const h = Number(ima.height);

      return {
        leftCol: clarfaiim.left_col * w,
        rightCol: w - clarfaiim.right_col * w,
        topRow: clarfaiim.top_row * h,
        bottomRow: h - clarfaiim.bottom_row * h,
      };
    });
    value.setcount(boxData.length);
    props.setbox(boxData);
  };
  return (
    <>
      <div className="input-box">
        <div className="input-style">
          <InputGroup width={550}>
            <Input
              height={12}
              value={link}
              pr="4.5rem"
              backgroundColor={"whitesmoke"}
              placeholder={"Enter Image Link"}
              onChange={(e) => {
                setLink(e.target.value);
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
          <div>
            <Button
              height={"49px"}
              className="input-button"
              colorScheme={"green"}
              onClick={() => {
                props.seturl(link);
                fetchData();
              }}
            >
              DETECT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
