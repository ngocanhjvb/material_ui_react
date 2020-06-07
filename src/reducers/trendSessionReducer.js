const initial = {
    listItem: []
};

const trendSessionReducer = (state = initial, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return {
                ...state
            }
        }
        case 'FETCH_DATA_SUCCESS': {
            return {
                ...state,
                listItem: action.payload
            }
        }
        case 'FETCH_DATA_ERROR': {
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
