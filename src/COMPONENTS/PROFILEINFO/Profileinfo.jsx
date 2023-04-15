import React, { useEffect, useState } from "react";
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
  AvatarBadge,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
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
  const [img, setimg] = useState("");
  const [avatar, setavatar] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { onClose } = useDisclosure();
  const editDetails = async () => {
    if (name) {
      try {
        const res = await fetch(`${link}/editdetails`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, id: user.id }),
        });
        const data = await res.json();
        setname("");
        dispatch(setUser(data));
        toast.success("PROFILE UPDATED", toastStyle);
        props.setprofile(!props.profile);
      } catch (error) {
        console.log(error);
      }
    }

    let formdata = new FormData();
    formdata.append("profilepic", img);
    const res = await fetch(`${link}/uploadprofileimg/${user.id}`, {
      method: "post",
      body: formdata,
    });
    const data = await res.json();
    dispatch(setUser(data));
    props.setprofile(!props.profile);
    window.location.reload(false);
  };
  const upload = (e) => {
    setimg(e.target.files[0]);
    setavatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Modal isOpen={props.profile} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="h4">Edit Profile</div>
            <Avatar size="2xl" src={avatar || user.avatarurl}>
              <AvatarBadge boxSize="0.em" bg={"white"} color="green">
                <label className="custom-file-upload">
                  <input
                    type="file"
                    className="avatar-file"
                    onChange={upload}
                  />
                  <AiFillCamera />
                </label>
              </AvatarBadge>
            </Avatar>
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              props.setprofile(!props.profile);
            }}
          />
          <ModalBody>
            <div className="profileinfo-details">
              <h4>Gmail: {user.email}</h4>
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
            <Button
              colorScheme={"red"}
              margin={2}
              onClick={() => editDetails()}
            >
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
