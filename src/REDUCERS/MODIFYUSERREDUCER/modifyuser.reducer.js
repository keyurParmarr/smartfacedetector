import { modifyUsersConstant } from "./modifyuser.constant";

const initialModifyusers = [];
export const modifyuserReducer = (state = initialModifyusers, action) => {
  switch (action.type) {
    case modifyUsersConstant.MODIFYUSERS:
      return action.payload;
    default:
      return state;
  }
};
