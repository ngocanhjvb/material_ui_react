import * as actionTypes from "../constants/actionTypes";

let endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);


const initial = {
    timeRangeArr: [
        {
            startDate: new Date(),
            endDate: endDate,
            key: 'selection'
        }
    ]
};

const timeRangeReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TIME_RANGE: {
            return {
                ...state,
                timeRangeArr: action.payload
            }
        }
        default:
            return state;
    }
}

export default timeRangeReducer;
