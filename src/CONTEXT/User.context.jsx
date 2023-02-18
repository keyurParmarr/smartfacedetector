import React, { createContext, useState } from "react";

export const UserContext = createContext({
  modifyusers: [],
  setmodifyusers: () => {},
  user: {},
  setuser: () => {},
  history: [],
  sethistory: () => {},
  localCount: 0,
  setlocalCount: () => {},
});

export const User = ({ children }) => {
  const [modifyusers, setmodifyusers] = useState([]);
  const [history, sethistory] = useState([]);
  const [user, setuser] = useState({});
  const [localCount, setlocalCount] = useState(0);
  const value = {
    modifyusers,
    setmodifyusers,
    user,
    setuser,
    history,
    sethistory,
    localCount,
    setlocalCount,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
