import React from "react";
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
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Scroll } from "../SCROLL/Scroll";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { setHistory } from "../../REDUCERS/HISTORYREDUCER/history.actions";
import { setModifyUsers } from "../../REDUCERS/MODIFYUSERREDUCER/modifyuser.actions";
export const Table = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [params] = useSearchParams();
  const tempId = params.get("id");
  const deleteHistory = async (deletelink) => {
    const res = await fetch(`${link}/deletehistory`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ deletelink, id: tempId }),
    });
    const data = await res.json();
    dispatch(setHistory(data));
  };
  const blockUnblockUsers = async ({ request, id }) => {
    const blockdata = { request, id };
    const res = await fetch(`${link}/blockusers`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blockdata),
    });
    const data = await res.json();
    dispatch(setModifyUsers(data));
  };
  const historyUsers = async (id) => {
    navigate(`/history?id=${id}`);
  };

  const removeUsers = async (id) => {
    const res = await fetch(`${link}/removeusers/${id}`);
    const data = await res.json();
    dispatch(setModifyUsers(data));
  };

  const historyComp = (link, i) => {
    return (
      <tr key={i} className="table-data-row">
        <td>{i + 1}</td>
        <td>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button>
                {link.history?.length > 100
                  ? `${link.history?.slice(
                      tempId.toString().length,
                      100
                    )}${"..."}`
                  : link.history?.slice(tempId.toString().length)}
              </Button>
            </PopoverTrigger>
            <PopoverContent width={400}>
              <PopoverHeader fontWeight="semibold">Image</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <img
                  src={link.history.slice(tempId.toString().length)}
                  className="img"
                  alt=""
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </td>
        <td>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => deleteHistory(link.history)}
          >
            <MdDelete style={{ height: "25px", width: "22px" }} />
          </div>
        </td>
      </tr>
    );
  };
  const userDataComp = (data, i) => {
    if (!data.isadmin)
      return (
        <tr
          key={i}
          className={data.isblocked ? "table-data-blockrow" : "table-data-row"}
        >
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
              onClick={() => {
                historyUsers(data.id);
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
              onClick={() => removeUsers(data.id)}
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
              onClick={() =>
                data.isblocked
                  ? blockUnblockUsers({ request: "unblock", id: data.id })
                  : blockUnblockUsers({ request: "block", id: data.id })
              }
            >
              {data.isblocked ? "UNBLOCK" : "BLOCK"}
            </button>
          </td>
        </tr>
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
                    <th>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <MdDeleteForever
                          style={{ height: "25px", width: "22px" }}
                        />
                      </div>
                    </th>
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
