import { createStore } from "redux";
import blogReducer from "./reducers";

const store = createStore(blogReducer)
export default store;