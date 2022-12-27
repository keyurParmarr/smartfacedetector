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

export const Signout = (props) => {
  const navigate = useNavigate();

  const signOutHandler = () => {
    navigate("/");
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
