import {reducer} from "./store/reducers";
import {createStore} from "redux";

// add thunk, add withDevTools
export const store = createStore(reducer);