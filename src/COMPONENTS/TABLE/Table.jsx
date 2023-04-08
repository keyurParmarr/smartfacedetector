import React, { useEffect, useState } from "react";
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
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import {
  MdDelete,
  MdDeleteForever,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { ImBlocked } from "react-icons/im";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Scroll } from "../SCROLL/Scroll";
import { link } from "../../Path";
import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "../../REDUCERS/HISTORYREDUCER/history.actions";
import { setModifyUsers } from "../../REDUCERS/MODIFYUSERREDUCER/modifyuser.actions";
import { Alert } from "./Alert";
import { FaHistory, FaUserTimes } from "react-icons/fa";
export const Table = (props) => {
  const [selectedLinks, setselectedLinks] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [params] = useSearchParams();
  const tempId = params.get("id");
  const history = useSelector((state) => {
    return state.history;
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const deletelinkHandler = (e, link) => {
    if (e.target.checked) {
      setselectedLinks([...selectedLinks, link]);
    } else {
      const newarr = selectedLinks.filter((i) => {
        return i !== link;
      });
      setselectedLinks(newarr);
    }
  };
  const deletingLinks = async () => {
    if (selectedLinks.length) {
      try {
        const res = await fetch(`${link}/deletespecific`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ selectedLinks, id: tempId }),
        });
        const data = await res.json();
        dispatch(setHistory(data));
        setselectedLinks([]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const checkbox = document.getElementsByClassName("table-checkbox");
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = false;
    }
  }, [history]);
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
          <input
            type="checkbox"
            className="table-checkbox"
            onChange={(e) => deletelinkHandler(e, link.history)}
          />
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
            <Button
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: "9px",
                borderRadius: "14px",
              }}
              onClick={() => {
                historyUsers(data.id);
              }}
              leftIcon={<FaHistory />}
            >
              HISTORY
            </Button>
          </td>
          <td>
            <Button
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "9px",
                borderRadius: "14px",
              }}
              onClick={() => removeUsers(data.id)}
              leftIcon={<FaUserTimes />}
            >
              REMOVE
            </Button>
          </td>
          <td>
            <Button
              style={{
                backgroundColor: data.isblocked ? "rgb(15 173 109)" : "red",
                color: "white",
                padding: "9px",
                borderRadius: "14px",
              }}
              onClick={() =>
                data.isblocked
                  ? blockUnblockUsers({ request: "unblock", id: data.id })
                  : blockUnblockUsers({ request: "block", id: data.id })
              }
              leftIcon={data.isblocked ? <CgUnblock /> : <ImBlocked />}
            >
              {data.isblocked ? "UNBLOCK" : "BLOCK"}
            </Button>
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
                      <Tooltip
                        label="To delete links, please select them"
                        placement="top"
                        fontSize={"16px"}
                        bg="red.600"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <MdOutlineDeleteSweep
                              onClick={
                                selectedLinks.length === 0 ? null : onOpen
                              }
                              style={{ height: "35px", width: "22px" }}
                            />
                          </span>
                          <Alert
                            isOpen={isOpen}
                            onClose={onClose}
                            title={"Selected"}
                            deletingLinks={deletingLinks}
                          />
                        </div>
                      </Tooltip>
                    </th>
                    <th>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <MdDeleteForever
                          style={{ height: "35px", width: "22px" }}
                          onClick={() => {
                            onOpen();
                            setselectedLinks([]);
                          }}
                        />
                        <Alert
                          isOpen={selectedLinks.length === 0 ? isOpen : null}
                          onClose={onClose}
                          id={tempId}
                          title={"All"}
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
