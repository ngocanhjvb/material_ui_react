import React from 'react';
import {Button, Popover} from "@material-ui/core";
import {DateRange} from "react-date-range";
import {convertTimeString} from "../../helpers";
import {useStyles} from "./style";


const DateTimeRange = props => {

    const {setTimeRange, timeRange} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classes = useStyles();


    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleClick} className={classes.dateTimeBox}>
                {'表示範囲'}
            </Button>
            <span>{convertTimeString(timeRange[0].startDate) + ' - ' + convertTimeString(timeRange[0].endDate)}</span>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <DateRange
                    editableDateInputs={false}
                    onChange={item => setTimeRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={timeRange}
                />
            </Popover>
        </>
    );
};

DateTimeRange.propTypes = {};

export default DateTimeRange;
