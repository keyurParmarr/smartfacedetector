import "./App.css";
import React from "react";
import { Information } from "../../COMPONENTS/INFORMATION/Information";
import { Navigation } from "../../COMPONENTS/NAVIGATION/Navigation";
import { InputComp } from "../../COMPONENTS/INPUT/Input";
import { Image } from "../../COMPONENTS/IMAGE/Image";
export const App = () => {
  return (
    <>
      <Navigation />
      <Information />
      <InputComp />
      <Image />
    </>
  );
};
