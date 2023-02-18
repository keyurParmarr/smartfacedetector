import { urlConstant } from "./url.constant";

const initialState = "";
export const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case urlConstant.SETURL:
      return action.payload;
    default:
      return state;
  }
};
