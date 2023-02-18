import { boxConstant } from "./box.constant";

const initialState = [];
export const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case boxConstant.SETBOX:
      return action.payload;
    default:
      return state;
  }
};
