const initial = {
    listItem: []
};

const trendSessionReducer = (state = initial, action) => {
    switch (action.type) {
        case 'CHANGE_TIME_FILTER': {
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
