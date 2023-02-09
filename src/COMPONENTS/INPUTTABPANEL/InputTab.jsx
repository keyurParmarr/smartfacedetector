import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { InputComp } from "../INPUT/Input";
import { InputFromdevice } from "../INPUTDEVICE/InputFromdevice";
import "./InputTab.css";

export const InputTab = () => {
  return (
    <>
      <div className="input-box">
        <div className="input-style">
          <Tabs variant="soft-rounded" colorScheme="green" height={"110px"}>
            <TabList className="tabdata">
              <Tab color={"white"}>IMAGE LINK</Tab>
              <Tab color={"white"}>UPLOAD IMAGE</Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding={"10px"} width={"780px"}>
                <InputComp />
              </TabPanel>
              <TabPanel>
                <InputFromdevice />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};
