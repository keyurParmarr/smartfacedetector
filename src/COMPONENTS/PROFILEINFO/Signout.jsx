import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  AlertDialogBody,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signout = (props) => {
  const navigate = useNavigate();

  const signOutHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/signout`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <div>
      <AlertDialog isOpen={props.signout}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Sign out
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure?</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  props.setsignout(!props.signout);
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  props.setsignout(!props.signout);
                  signOutHandler();
                }}
                ml={3}
              >
                Sign out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};
