import axiosService from "../services/axiosService";
import * as trendSessionAction from "./trendSession";
import * as uiAction from "./common";

const loadDataTimeFilter = (url) => {

    return (dispatch) => {
        dispatch(trendSessionAction.fetchTrendSession());

        dispatch(uiAction.showLoading());

        axiosService.get(url).then((success) => {

            dispatch(trendSessionAction.fetchTrendSessionSuccess(success.data));

            setTimeout(() =>{

                dispatch(uiAction.hideLoading())

            },300)
        }).catch((error) => {

            dispatch(trendSessionAction.fetchTrendSessionError(error));

            setTimeout(() =>{

                dispatch(uiAction.hideLoading())

            },300)

        })

    }
}

export default loadDataTimeFilter;
