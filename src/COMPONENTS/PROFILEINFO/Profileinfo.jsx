import React, { useState } from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import "./Profileinfo.css";
import { toast } from "react-toastify";
import { link } from "../../Path";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../REDUCERS/USERREDUCER/user.actions";

export const Profileinfo = (props) => {
  const toastStyle = {
    theme: "colored",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };
  const [name, setname] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { onClose } = useDisclosure();
  const editName = async () => {
    if (name) {
      try {
        const res = await fetch(`${link}/editname`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, id: user.id }),
        });
        const data = await res.json();
        setname("");
        dispatch(setUser(data));
        toast.success("Name Changed", toastStyle);
        props.setprofile(!props.profile);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Modal isOpen={props.profile} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="h4">Edit Profile</div>
            <Avatar size="2xl" name={user.name} />
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              props.setprofile(!props.profile);
            }}
          />
          <ModalBody>
            <div className="profileinfo-details">
              <h4>Certified Mail: {user.email}</h4>
              <h4>
                Member since:&nbsp;
                {new Date(user.joined).toLocaleString("hi-IN").slice(0, 10)}
              </h4>
              <h2>Name: {user.name}</h2>
            </div>
            <div className="profileinfo-input">
              <Input
                type="text"
                placeholder="Edit Name"
                padding={1}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </ModalBody>
          <ModalFooter padding={1} display={"flex"} justifyContent={"center"}>
            <Button colorScheme={"red"} margin={2} onClick={() => editName()}>
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
