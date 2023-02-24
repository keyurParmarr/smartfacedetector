import { modifyUsersConstant } from "./modifyuser.constant";

export const setModifyUsers = (data) => {
  return {
    type: modifyUsersConstant.MODIFYUSERS,
    payload: data,
  };
};
