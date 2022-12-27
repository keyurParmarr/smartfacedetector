import "./App.css";
import React, { useState } from "react";
import { Information } from "../../COMPONENTS/INFORMATION/Information";
import { Navigation } from "../../COMPONENTS/NAVIGATION/Navigation";
import { InputComp } from "../../COMPONENTS/INPUT/Input";
import { Image } from "../../COMPONENTS/IMAGE/Image";

export const App = () => {
  const [url, seturl] = useState("");
  const [box, setbox] = useState([]);

  return (
    <>
      <Navigation />
      <Information />
      <InputComp url={url} seturl={seturl} setbox={setbox} />
      <Image url={url} box={box} />
    </>
  );
};
