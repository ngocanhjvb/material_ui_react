import * as actionTypes from './../constants/actionTypes';

export const showLoading = () => ({
    type: actionTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
    type: actionTypes.HIDE_LOADING,
});

export const changeTimeFilter = (timeFilter) => ({
    type: actionTypes.CHANGE_TIME_FILTER,
    payload: timeFilter
});

export const changTimeRange = (timeRange) => ({
    type: actionTypes.CHANGE_TIME_RANGE,
    payload: timeRange
});


