import { userConstant } from "./user.constant";

const initialState = {};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.SETUSER:
      return action.payload;
    default:
      return state;
  }
};
