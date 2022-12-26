import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./COMPONENTS/APP/App";
import { Firstpage } from "./COMPONENTS/FIRSTPAGE/Firstpage";
import { About } from "./COMPONENTS/ABOUT/About";
import { History } from "./COMPONENTS/HISTORY/History";
import { AdminLogin } from "./COMPONENTS/ADMIN/ADMINLOGIN/AdminLogin";
import { Adminpage } from "./COMPONENTS/ADMIN/ADMINPAGE/Adminpage";
import { Modifyusers } from "./COMPONENTS/ADMIN/MODIFYUSERS/Modifyusers";
import { Signup } from "./ROUTES/SIGNUP/Signup";
import { Login } from "./ROUTES/LOGIN/Login";

export const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/app" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminpage" element={<Adminpage />} />
      <Route path="/modifyusers" element={<Modifyusers />} />
    </Routes>
  );
};
