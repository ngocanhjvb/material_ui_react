import * as actionTypes from "../constants/actionTypes";

const initial = {
    type: 'day'
};

const timeFilterReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TIME_FILTER: {
            return {
                ...state,
                type: action.payload
            }
        }
        default:
            return state;
    }
}

export default timeFilterReducer;
