import { combineReducers } from "redux";
import { boxReducer } from "./BOXREDUCER/box.reducer";
import { historyReducer } from "./HISTORYREDUCER/history.reducer";
import { localCountReducer } from "./LOCALCOUNT/localcount.reducer";
import { modifyuserReducer } from "./MODIFYUSERREDUCER/modifyuser.reducer";
import { urlReducer } from "./URLREDUCER/url.reducer";
import { userReducer } from "./USERREDUCER/user.reducer";

export const rootReducer = combineReducers({
  url: urlReducer,
  box: boxReducer,
  user: userReducer,
  localCount: localCountReducer,
  modifyUsers: modifyuserReducer,
  history: historyReducer,
});
