import React, { createContext, useState } from "react";

export const UserContext = createContext({
  token: "",
  settoken: () => {},
  user: {},
  setuser: () => {},
  count: 0,
  setcount: () => {},
});

export const User = ({ children }) => {
  const [token, settoken] = useState("");
  const [count, setcount] = useState(0);
  const [user, setuser] = useState({
    name: "abc",
    count: 0,
  });
  const value = { token, settoken, user, setuser, count, setcount };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
