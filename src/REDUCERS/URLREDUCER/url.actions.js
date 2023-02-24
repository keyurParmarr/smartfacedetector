import { urlConstant } from "./url.constant";

export const setUrl = (data) => {
  return {
    type: urlConstant.SETURL,
    payload: data,
  };
};
