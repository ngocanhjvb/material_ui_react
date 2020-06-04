import React, {useState} from 'react';
import {Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from "recharts";
import {Box} from "@material-ui/core";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateTimeRange from "../../components/DateTimeRange";
import TimeFilter from "../../components/TimeFilter";
import {useStyles} from "./style";


const TrendSession = props => {
    const data = [
        {
            "name": "日曜日",
            "day": "日",
            "uv": 40,
        },
        {
            "name": "月曜日",
            "day": "月",
            "uv": 30,
        },
        {
            "name": "火曜日",
            "day": "火",
            "uv": 30,
        },
        {
            "name": "水曜日",
            "day": "水",
            "uv": 50,
        },
        {
            "name": "木曜日",
            "day": "木",
            "uv": 40,
        },
        {
            "name": "金曜日",
            "day": "金",
            "uv": 10,
        },
        {
            "name": "土曜日",
            "day": "土",
            "uv": 10,
        }
    ];

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

    const classes = useStyles()

    return (
        <div className="App">
            <Box className={classes.boxWrap}>
                <DateTimeRange
                    setTimeRange={setTime}
                    timeRange={timeRange}
                />
                <TimeFilter
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
                />
            </Box>


            <LineChart width={1500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="uv" stroke="#036"/>
            </LineChart>
            <BarChart
                width={1500}
                height={300}
                data={data}
                layout="vertical"
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
                <XAxis type="number"/>
                <YAxis type="category" dataKey="name"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Bar dataKey="uv" fill="#036">
                    <LabelList dataKey="uv" position="right"/>
                </Bar>
            </BarChart>
        </div>
    );
};

LineChart.propTypes = {};

export default TrendSession;
