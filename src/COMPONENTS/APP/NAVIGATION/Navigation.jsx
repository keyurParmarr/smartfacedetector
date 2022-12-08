import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profileinfo } from "../PROFILEINFO/Profileinfo";
import { Signout } from "../PROFILEINFO/Signout";
import { Title } from "../../TITLE/Title";
import brainlogo from "./brain.png";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "./Navigation.css";
import { UserContext } from "../../../CONTEXT/User.context";

export const Navigation = () => {
  const [profile, setprofile] = useState(false);
  const [signout, setsignout] = useState(false);

  const value = useContext(UserContext);
  const navigate = useNavigate();
  console.log(value);
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "cyan",
    fontsize: "36px",
  };
  return (
    <div className="navigation-box">
      <img
        src={brainlogo}
        height={120}
        width={150}
        className="navigation-logo"
      />
      <Title titleData={titleData} />
      <div className="navigation-profile">
        <Menu>
          <MenuButton>
            <Avatar size="2xl" />
          </MenuButton>
          <MenuList backgroundColor={"gray.400"} marginTop={"-3"}>
            <MenuItem
              onClick={() => {
                navigate("/history");
              }}
            >
              History
            </MenuItem>
            <MenuItem onClick={() => setprofile(!profile)}>
              View Profile
              <Profileinfo profile={profile} setprofile={setprofile} />
            </MenuItem>
            <MenuItem onClick={() => setsignout(!signout)}>
              SIGN OUT
              <Signout signout={signout} setsignout={setsignout} />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
