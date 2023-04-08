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
import { useDispatch } from "react-redux";
import { link } from "../../Path";
import { setHistory } from "../../REDUCERS/HISTORYREDUCER/history.actions";
export const Alert = (props) => {
  const dispatch = useDispatch();
  const HistoryDeleteHandler = async () => {
    const res = await fetch(`${link}/deleteallHistory`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: props.id }),
    });
    const data = await res.json();
    dispatch(setHistory(data));
  };
  return (
    <div>
      <AlertDialog isOpen={props.isOpen}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {props.title} History
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure?</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="red"
                onClick={() => {
                  props.onClose();
                  props.title === "All"
                    ? HistoryDeleteHandler()
                    : props.deletingLinks();
                }}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  props.onClose();
                }}
                ml={3}
              >
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};
