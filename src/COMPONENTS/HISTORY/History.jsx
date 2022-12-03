import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Title } from "../TITLE/Title";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import "./History.css";
export const History = () => {
  const navigate = useNavigate();
  const links = [
    "https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=200",
  ];
  const titleData = {
    title: "HISTORY",
    color: "black",
    fontsize: "38px",
  };
  return (
    <>
      <div className="history-main">
        <div className="history-backbtn">
          <button
            onClick={() => {
              navigate("/app");
            }}
          >
            <FaArrowLeft
              style={{ background: "none", alignContent: "flex-start" }}
            />
          </button>
        </div>
        <Title titleData={titleData} />
        {/* <div className="history-title">History</div> */}
        <div className="history-extradot">.</div>
      </div>
      <div className="history-info">Recent Searches</div>
      <div className="history-table">
        <table>
          <tr>
            <th className="history-tableheaderNo">No.</th>
            <th>Links</th>
          </tr>
          {links.map((link, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button>{link}</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader fontWeight="semibold">
                        Image{" "}
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <img src={link} className="img" alt="" />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
