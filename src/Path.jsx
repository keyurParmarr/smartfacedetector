import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./COMPONENTS/APP/App";
import { LoginSignup } from "./COMPONENTS/LOGIN&SIGNUP/LoginSignup";
import { Firstpage } from "./COMPONENTS/FIRSTPAGE/Firstpage";
import { About } from "./COMPONENTS/ABOUT/About";
import { History } from "./COMPONENTS/HISTORY/History";
import { AdminLogin } from "./COMPONENTS/ADMIN/ADMINLOGIN/AdminLogin";

export const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/app" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  );
};
