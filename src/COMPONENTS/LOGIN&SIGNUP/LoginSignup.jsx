import React from "react";
import { Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/react";
import { Login } from "../LOGIN/Login";
import { Signup } from "../SIGNUP/Signup";
import "./LoginSignup.css";

export const LoginSignup = () => {
  return (
    <>
      <div className="loginSignup-box">
        <div className="loginSignup-title">Smart Face Detector</div>
        <div className="loginSignup-section">
          <div className="loginSignup-container">
            <div className="loginSignup-panel">
              <Tabs isFitted variant="soft-rounded">
                <TabList>
                  <Tab _selected={{ color: "white", bg: "green.500" }}>
                    LOGIN
                  </Tab>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>
                    SIGNUP
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Login />
                  </TabPanel>
                  <TabPanel>
                    <Signup />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
