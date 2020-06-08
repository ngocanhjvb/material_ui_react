import React from 'react';
import PropTypes from 'prop-types';
import {Bar, CartesianGrid, LabelList, Tooltip, XAxis, YAxis, BarChart} from "recharts";

const BarChartVa = props => {

    const {data} = props

    return (
        <>
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
                <Bar dataKey="value" fill="#036">
                    <LabelList dataKey="value" position="right"/>
                </Bar>
            </BarChart>
        </>
    );
};

BarChart.propTypes = {};

export default BarChartVa;
