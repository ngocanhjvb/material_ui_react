import {combineReducers} from "redux";
import trendSessionReducer from "./trendSessionReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
    trendSession: trendSessionReducer,
    ui:uiReducer
})


export default rootReducer;
