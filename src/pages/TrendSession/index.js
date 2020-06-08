import React, {useEffect, useState} from 'react';
import {Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from "recharts";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import TimeBox from "../../components/TimeBox";
import {Box} from "@material-ui/core";
import Overview from "../../components/Overview";
import axiosService from "../../services/axiosService";
import loadDataTimeFilter from "../../actions/loadDataTimeFilter";
import {useDispatch, useSelector} from "react-redux";
import AreaChartVa from "../../components/Charts/AreaChartVa";
import BarChartVa from "../../components/Charts/BarChartVa";


const TrendSession = props => {

    //date time range

    let endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const [timeRange, setTime] = useState([
        {
            startDate: new Date(),
            endDate: endDate,
            key: 'selection'
        }
    ]);

    const [timeFilter, setTimeFilter] = useState('day');

    // Dùng state của react hook


    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     axiosService.get(timeFilter)
    //         .then((success) => {
    //             setData(success.data)
    //         }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [timeFilter]);
    //
    // console.log(data)

    // Dùng redux với global state

    const data = useSelector(state => state.trendSession.listItem);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDataTimeFilter(timeFilter));
    }, [timeFilter]);

    // console.log(data)





    return (
        <>
            <TimeBox
                setTime={setTime}
                timeRange={timeRange}
                timeFilter={timeFilter}
                setTimeFilter={setTimeFilter}
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

LineChart.propTypes = {};

export default TrendSession;
