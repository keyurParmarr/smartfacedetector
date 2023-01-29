import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profileinfo } from "../PROFILEINFO/Profileinfo";
import { Signout } from "../PROFILEINFO/Signout";
import { FaUserCircle, FaHistory, FaSignOutAlt } from "react-icons/fa";
import logo from "./logo3.png";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuIcon,
} from "@chakra-ui/react";
import "./Navigation.css";
import { Title } from "../TITLE/Title";

export const Navigation = () => {
  const [profile, setprofile] = useState(false);
  const [signout, setsignout] = useState(false);
  const navigate = useNavigate();

  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };

  return (
    <div className="navigation-box">
      <img src={logo} className="navigation-logo" alt="img" />
      <Title titleData={titleData} />
      <div className="navigation-profile">
        <Menu>
          <MenuButton>
            <Avatar size="2xl" />
          </MenuButton>
          <MenuList backgroundColor={"gray.400"} marginTop={"-0.5"}>
            <MenuItem onClick={() => setprofile(!profile)}>
              <MenuIcon
                children={
                  <FaUserCircle
                    style={{ marginRight: "7px", color: "black" }}
                  />
                }
              />
              View Profile
              <Profileinfo profile={profile} setprofile={setprofile} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/history");
              }}
            >
              <MenuIcon
                children={
                  <FaHistory style={{ marginRight: "7px", color: "black" }} />
                }
              />
              History
            </MenuItem>
            <MenuItem onClick={() => setsignout(!signout)}>
              <MenuIcon
                children={
                  <FaSignOutAlt
                    style={{ marginRight: "7px", color: "black" }}
                  />
                }
              />
              SIGN OUT
              <Signout signout={signout} setsignout={setsignout} />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
