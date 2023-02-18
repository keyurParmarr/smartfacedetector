import { combineReducers } from "redux";
import { boxReducer } from "./BOXREDUCER/box.reducer";
import { urlReducer } from "./URLREDUCER/url.reducer";

export const rootReducer = combineReducers({
  url: urlReducer,
  box: boxReducer,
});
