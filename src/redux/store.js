import { createStore } from "redux";
import { Counter } from "./counter";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  counter: Counter,
});
export const store = createStore(rootReducer);
