import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { Information } from "./INFORMATION/Information";
import { Navigation } from "./NAVIGATION/Navigation";
import { InputComp } from "./INPUT/Input";
import { Image } from "./IMAGE/Image";
import { UserContext } from "../../CONTEXT/User.context";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const [url, seturl] = useState("");
  const [box, setbox] = useState([]);
  const value = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (value.token === "") {
    //   navigate("/login");
    // }
  }, []);

  return (
    <>
      <Navigation />
      <Information />
      <InputComp url={url} seturl={seturl} setbox={setbox} />
      <Image url={url} box={box} />
    </>
  );
};

export default App;
