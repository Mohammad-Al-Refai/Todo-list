import { createStore } from "redux";
import { homeReducer } from "./Home/reducer";

let store=createStore(homeReducer)


export default store