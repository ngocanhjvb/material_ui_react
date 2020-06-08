import * as actionTypes from "../constants/actionTypes";

const initial = {
    listItem: []
};

const trendSessionReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA: {
            return {
                ...state
            }
        }
        case actionTypes.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                listItem: action.payload
            }
        }
        case actionTypes.FETCH_DATA_ERROR: {
            return {
                ...state,
                listItem: action.payload
            }
        }
        default:
            return state;
    }
}

export default trendSessionReducer;
