const initial = {
    showLoading: false
};

const uiReducer = (state = initial, action) => {
    switch (action.type) {
        case 'SHOW_LOADING': {
            return {
                ...state,
                showLoading: true
            }
        }
        case 'HIDE_LOADING': {
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
