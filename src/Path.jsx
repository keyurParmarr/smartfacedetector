import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./ROUTES/LOGIN/Login";
import { Signup } from "./ROUTES/SIGNUP/Signup";
import { App } from "./ROUTES/APP/App";
import { About } from "./ROUTES/ABOUT/About";
import { History } from "./ROUTES/HISTORY/History";
import { AdminLogin } from "./ROUTES/ADMINLOGIN/AdminLogin";
import { Adminpage } from "./ROUTES/ADMINPAGE/Adminpage";
import { Modifyusers } from "./ROUTES/MODIFYUSERS/Modifyusers";
import { Loginsignupnav } from "./COMPONENTS/LOGINSIGNUPNAV/Loginsignupnav";
import { ForgotPassword } from "./ROUTES/FORGOTPASSWORD/ForgotPassword";
// export const link = "http://43.207.154.57:5000";
export const link = "http://localhost:5000";
export const Path = () => {
  const titleData = {
    title: "SMART FACE DETECTOR",
    color: "black",
    fontsize: "60px",
  };
  return (
    <Routes>
      <Route path="/" element={<Loginsignupnav titleData={titleData} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/app" element={<App />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/history" element={<History />} />
      <Route path="/adminpage" element={<Adminpage />} />
      <Route path="/modifyusers" element={<Modifyusers />} />
    </Routes>
  );
};
