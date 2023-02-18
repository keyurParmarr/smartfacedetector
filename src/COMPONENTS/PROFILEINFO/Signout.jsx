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
import { useContext } from "react";
import { UserContext } from "../../CONTEXT/User.context";
import Cookies from "js-cookie";
import { link } from "../../Path";
import { useDispatch } from "react-redux";
import { boxConstant } from "../../REDUCERS/BOXREDUCER/box.constant";
import { urlConstant } from "../../REDUCERS/URLREDUCER/url.constant";

export const Signout = (props) => {
  const toastStyle = {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setlocalCount, setuser, setmodifyusers, sethistory } =
    useContext(UserContext);
  const signOutHandler = async () => {
    const token = Cookies.get("token");
    try {
      // eslint-disable-next-line
      const res = await fetch(`${link}/signout`, {
        method: "post",
        headers: { "content-type": "application/json", authorization: token },
      });
      toast.success("SIGNED OUT SUCCESSFULLY", toastStyle);
      dispatch({
        type: urlConstant.SETURL,
        payload: "",
      });
      dispatch({
        type: boxConstant.SETBOX,
        payload: [],
      });
      setuser({});
      setmodifyusers([]);
      sethistory([]);
      setlocalCount(0);
      Cookies.remove("token");
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
