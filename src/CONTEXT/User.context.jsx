import React, { createContext, useState } from "react";

export const UserContext = createContext({
  modifyusers: [],
  setmodifyusers: () => {},
  user: {},
  setuser: () => {},
  history: [],
  sethistory: () => {},
  url: "",
  seturl: () => {},
  box: [],
  setbox: () => {},
  localCount: 0,
  setlocalCount: () => {},
});

export const User = ({ children }) => {
  const [modifyusers, setmodifyusers] = useState([]);
  const [history, sethistory] = useState([]);
  const [url, seturl] = useState("");
  const [box, setbox] = useState([]);
  const [user, setuser] = useState({});
  const [localCount, setlocalCount] = useState(0);
  const value = {
    modifyusers,
    setmodifyusers,
    user,
    setuser,
    history,
    sethistory,
    url,
    seturl,
    box,
    setbox,
    localCount,
    setlocalCount,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
