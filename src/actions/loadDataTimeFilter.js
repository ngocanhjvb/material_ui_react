import axiosService from "../services/axiosService";

const loadDataTimeFilter = (url) => {

    return (dispatch) => {
        axiosService.get(url).then((success) => {
            dispatch({
                type: 'CHANGE_TIME_FILTER',
                payload: success.data
            });
        }).catch((error) => {
            dispatch({
                type: 'CHANGE_TIME_FILTER',
                payload: error
            });
        })
    }
}

export default loadDataTimeFilter;
