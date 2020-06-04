import React from 'react';
import {Box} from "@material-ui/core";
import DateTimeRange from "./DateTimeRange";
import TimeFilter from "./TimeFilter";
import {useStyles} from "./style";

const TimeBox = props => {

    const {setTime, timeRange, timeFilter, setTimeFilter} = props;

    const classes = useStyles();

    return (
        <>
            <Box
                borderRadius={3}
                borderColor="#99bbe8"
                border={1}
                className={classes.boxWrap}
            >
                <DateTimeRange
                    setTimeRange={setTime}
                    timeRange={timeRange}
                />
                <TimeFilter
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
                />
            </Box>
        </>
    );
};

TimeBox.propTypes = {};

export default TimeBox;
