import {combineReducers} from "redux";
import trendSessionReducer from "./trendSessionReducer";
import uiReducer from "./uiReducer";
import timeFilterReducer from "./timeFilterReducer";
import timeRangeReducer from "./timeRangeReducer";

const rootReducer = combineReducers({
    trendSession: trendSessionReducer,
    ui:uiReducer,
    timeFilter:timeFilterReducer,
    timeRange:timeRangeReducer

});


export default rootReducer;
