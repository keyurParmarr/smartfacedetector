import { userConstant } from "./user.constant";

export const setUser = (data) => {
  return {
    type: userConstant.SETUSER,
    payload: data,
  };
};
