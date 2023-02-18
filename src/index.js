import React from "react";
// eslint-disable-next-line
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Path } from "./Path";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { User } from "./CONTEXT/User.context";
import { Provider } from "react-redux";
import { store } from "./Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <ToastContainer position="bottom-center" transition={Flip} />
        <User>
          <Path />
        </User>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
