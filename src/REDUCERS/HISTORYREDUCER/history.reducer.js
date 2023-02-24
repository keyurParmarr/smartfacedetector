import { historyConstant } from "./history.constant";

const initialHistory = [];

export const historyReducer = (state = initialHistory, action) => {
  switch (action.type) {
    case historyConstant.SETHISTORY:
      return action.payload;

    default:
      return state;
  }
};
