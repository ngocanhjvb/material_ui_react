import React, {useEffect, useState} from 'react';
import TimeBox from "../../components/TimeBox";
import {Box} from "@material-ui/core";
import Overview from "../../components/Overview";
import loadDataTimeFilter from "../../actions/loadDataTimeFilter";
import {useDispatch, useSelector} from "react-redux";
import AreaChartVa from "../../components/Charts/AreaChartVa";
import BarChartVa from "../../components/Charts/BarChartVa";
import {bindActionCreators} from "redux";
import * as commonActionObjects from "../../actions/common";


const TrendSession = props => {

    //date time range

    // let endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // const [timeRange, setTime] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: endDate,
    //         key: 'selection'
    //     }
    // ]);

    const data = useSelector(state => state.trendSession.listItem);

    const timeFilter = useSelector(state => state.timeFilter.type);

    const timeRange = useSelector(state => state.timeRange.timeRangeArr);

    const dispatch = useDispatch();

    const commonActions = bindActionCreators(commonActionObjects, dispatch);

    const onSetTimeFilter = (timeFilter) => {
        commonActions.changeTimeFilter(timeFilter);
    }

    const onSetTimeRange = (timeRange) => {
        commonActions.changTimeRange(timeRange);
    }


    useEffect(() => {
        dispatch(loadDataTimeFilter(timeFilter));
    }, [timeFilter, dispatch]);


    return (
        <>
            <TimeBox
                setTime={onSetTimeRange}
                timeRange={timeRange}
                timeFilter={timeFilter}
                setTimeFilter={onSetTimeFilter}
            />
            <Box p={1}>
                <Overview>すべてのユーザーのセッション数</Overview>

                <AreaChartVa data={data}/>

                <Overview>0セッション | 0.0セッション/日</Overview>

                <BarChartVa data={data}/>


            </Box>
        </>
    );
};

export default TrendSession;
