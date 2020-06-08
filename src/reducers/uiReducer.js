import * as actionTypes from "../constants/actionTypes";

const initial = {
    showLoading: false
};

const uiReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADING: {
            return {
                ...state,
                showLoading: true
            }
        }
        case actionTypes.HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            }
        }
        default:
            return state;
    }
}

export default uiReducer;
