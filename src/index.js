import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Path } from "./Path";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { User } from "./CONTEXT/User.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [token, settoken] = useState("");
// const [user, setuser] = useState({
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <User>
        <Path />
      </User>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
