import { localCountConstant } from "./localcount.constant";

const initialLocalCount = 0;

export const localCountReducer = (state = initialLocalCount, action) => {
  switch (action.type) {
    case localCountConstant.SETLOCALCOUNT:
      return action.payload;

    default:
      return state;
  }
};
