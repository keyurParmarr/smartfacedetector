import { createStore } from "redux";
import { rootReducer } from "./REDUCERS/root.reducer";

export const store = createStore(rootReducer);
