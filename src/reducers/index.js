import {combineReducers} from "redux";
import trendSessionReducer from "./trendSessionReducer";

const rootReducer = combineReducers({
    trendSession: trendSessionReducer
})


export default rootReducer;
