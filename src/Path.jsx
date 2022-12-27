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
