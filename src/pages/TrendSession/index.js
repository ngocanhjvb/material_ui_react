import React from 'react';
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    BarChart,
    Bar,
    LabelList,
    PieChart,
    Pie
} from "recharts";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


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

    let date = new Date()
    let endDate = new Date().setDate(date.getDate() + 7)

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: endDate,
            key: 'selection'
        }
    ]);






    return (



        <div className="App">
            <DateRange
                editableDateInputs={false}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <LineChart width={1500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="uv" stroke="#036"/>
            </LineChart>
            {/*<hr/>*/}
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
            {/*<PieChart width={730} height={250}>*/}
            {/*    <Pie data={data} dataKey="uv" nameKey="name"*/}
            {/*         fill="#82ca9d" label/>*/}
            {/*</PieChart>*/}

        </div>
    );
};

LineChart.propTypes = {};

export default TrendSession;
