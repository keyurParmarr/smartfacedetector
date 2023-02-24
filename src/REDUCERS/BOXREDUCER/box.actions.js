import { boxConstant } from "./box.constant";

export const setBox = (data) => {
  return {
    type: boxConstant.SETBOX,
    payload: data,
  };
};
