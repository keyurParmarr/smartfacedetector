import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Avatar,
} from "@chakra-ui/react";
import "./Profileinfo.css";
import { useContext } from "react";
import { UserContext } from "../../CONTEXT/User.context";

export const Profileinfo = (props) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Modal isOpen={props.profile} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>Edit Profile</div>
            <Avatar size="2xl" src="" />
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              props.setprofile(!props.profile);
            }}
          />
          <ModalBody>
            <div className="profileinfo-details">
              <h4>
                Member since:
                {new Date(user.joined).toLocaleString("hi-IN").slice(0, 10)}
              </h4>
              <h2>Name: {user.name}</h2>
            </div>
            <div className="profileinfo-input">
              <Input type="text" placeholder="Edit Name" padding={1} />
            </div>
          </ModalBody>
          <ModalFooter padding={1} display={"flex"} justifyContent={"center"}>
            <Button colorScheme={"red"} margin={2}>
              Save
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                props.setprofile(!props.profile);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
