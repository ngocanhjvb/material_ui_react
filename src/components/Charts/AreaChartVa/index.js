import React from 'react';
import PropTypes from 'prop-types';
import {Area, CartesianGrid, Tooltip, XAxis, YAxis, AreaChart} from "recharts";

const AreaChartVa = props => {

    const {data} = props

    return (
        <>
            <AreaChart
                width={1500}
                height={250}
                data={data}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Area dataKey="value" stroke="#1A87D5" fill="#E8F3FB"/>
            </AreaChart>
        </>
    );
};

AreaChart.propTypes = {

};

export default AreaChartVa;
