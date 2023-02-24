import { localCountConstant } from "./localcount.constant";

export const setLocalCount = (data) => {
  return {
    type: localCountConstant.SETLOCALCOUNT,
    payload: data,
  };
};
