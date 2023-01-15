import React, { useContext } from "react";
import "./Table.css";
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
import { useLocation } from "react-router-dom";
import { Scroll } from "../SCROLL/Scroll";
export const Table = (props) => {
  const location = useLocation();
  const blockUsers = async (id) => {
    console.log(id);
    const res = await fetch(`http://localhost:5000/blockusers/${id}`);
    const data = await res.json();
  };

  const historyComp = (link, i) => {
    return (
      <tr key={i} className="table-data-row">
        <td>{i + 1}</td>
        <td>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button>
                {link.history?.length > 120
                  ? `${link.history?.slice(0, 120)}${"..."}`
                  : link.history}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">Image</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <img src={link.history} className="img" alt="" />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </td>
      </tr>
    );
  };
  const userDataComp = (data, i) => {
    return (
      <>
        <tr key={i} className="table-data-row">
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.entries}</td>
          <td>{data.joined?.slice(0, 10)}</td>
          <td>
            <button
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: "3px",
                borderRadius: "10px",
              }}
            >
              HISTORY
            </button>
          </td>
          <td>
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "3px",
                borderRadius: "10px",
              }}
            >
              REMOVE
            </button>
          </td>
          <td>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "3px",
                borderRadius: "10px",
              }}
              onClick={() => blockUsers(data.id)}
            >
              BLOCK
            </button>
          </td>
        </tr>
      </>
    );
  };
  let scroll = false;
  if (props.data.length > 10) scroll = true;
  return (
    <div className="table-container">
      <div className="table">
        <Scroll scroll={scroll}>
          <table>
            <thead>
              <tr className="table-heading-row">
                {location.pathname === "/history" ? (
                  <>
                    <th>Sr.No</th>
                    <th>Links</th>
                  </>
                ) : (
                  <>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Faces Detected</th>
                    <th>Joined</th>
                    <th>History</th>
                    <th>Remove</th>
                    <th>Block</th>
                  </>
                )}
              </tr>
            </thead>

            <tbody>
              {location.pathname === "/history"
                ? props.data.map((link, i) => {
                    return historyComp(link, i);
                  })
                : props.data.map((userData, i) => {
                    return userDataComp(userData, i);
                  })}
            </tbody>
          </table>
        </Scroll>
      </div>
    </div>
  );
};
