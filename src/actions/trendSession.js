import * as actionTypes from './../constants/actionTypes';

export const fetchTrendSession = () => ({
    type: actionTypes.FETCH_DATA,
});

export const fetchTrendSessionSuccess = (data) => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload:data
});

export const fetchTrendSessionError = (data) => ({
    type: actionTypes.FETCH_DATA_ERROR,
    payload:data
});
