import * as actionTypes from './../constants/actionTypes';

export const showLoading = () => ({
    type: actionTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
    type: actionTypes.HIDE_LOADING,
});
