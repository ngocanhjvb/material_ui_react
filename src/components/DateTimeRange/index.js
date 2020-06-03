import React from 'react';
import {Button, Popover} from "@material-ui/core";
import {DateRange} from "react-date-range";
import {convertTimeString} from "../../helpers";

const DateTimeRange = props => {

    const {setTime, timeRange,classes} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                    onChange={item => setTime([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={timeRange}
                />
            </Popover>
        </>
    );
};

DateTimeRange.propTypes = {};

export default DateTimeRange;
