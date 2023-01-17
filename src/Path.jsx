import React from "react";
import { Route, Routes } from "react-router-dom";
import { Firstpage } from "./ROUTES/FIRSTPAGE/Firstpage";
import { Login } from "./ROUTES/LOGIN/Login";
import { Signup } from "./ROUTES/SIGNUP/Signup";
import { App } from "./ROUTES/APP/App";
import { About } from "./ROUTES/ABOUT/About";
import { History } from "./ROUTES/HISTORY/History";
import { AdminLogin } from "./ROUTES/ADMINLOGIN/AdminLogin";
import { Adminpage } from "./ROUTES/ADMINPAGE/Adminpage";
import { Modifyusers } from "./ROUTES/MODIFYUSERS/Modifyusers";
import { Loginsignupnav } from "./COMPONENTS/LOGINSIGNUPNAV/Loginsignupnav";

export const Path = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "45px",
    marginTop: "10px",
  };
  return (
    <Routes>
      <Route path="/" element={<Loginsignupnav titleData={titleData} />}>
        {/* <Route index element={<Firstpage />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/app" element={<App />} />
      <Route path="/history" element={<History />} />
      <Route path="/adminpage" element={<Adminpage />} />
      <Route path="/modifyusers" element={<Modifyusers />} />
    </Routes>
  );
};
