import { historyConstant } from "./history.constant";

export const setHistory = (data) => {
  return {
    type: historyConstant.SETHISTORY,
    payload: data,
  };
};
