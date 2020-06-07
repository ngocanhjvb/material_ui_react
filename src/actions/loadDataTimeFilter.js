import axiosService from "../services/axiosService";

const loadDataTimeFilter = (url) => {

    return (dispatch) => {
        dispatch({
            type: 'FETCH_DATA'
        })

        dispatch({
            type: 'SHOW_LOADING'
        })
        axiosService.get(url).then((success) => {
            dispatch({
                type: 'FETCH_DATA_SUCCESS',
                payload: success.data
            });
            setTimeout(() =>{
                dispatch({
                    type: 'HIDE_LOADING'
                })
            },300)
        }).catch((error) => {
            dispatch({
                type: 'FETCH_DATA_ERROR',
                payload: error
            });
            setTimeout(() =>{
                dispatch({
                    type: 'HIDE_LOADING'
                })
            },300)

        })

    }
}

export default loadDataTimeFilter;
