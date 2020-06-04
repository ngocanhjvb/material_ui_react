import React from 'react';
import {Button, Popover,Box} from "@material-ui/core";
import {DateRange} from "react-date-range";
import {convertTimeString} from "../../../helpers";
import {useStyles} from "./style";
import Icon from "@material-ui/core/Icon";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


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
    const id = open ? 'time-range-popover' : undefined;

    const classes = useStyles();


    return (
        <>
            <Box>
                <Button
                    aria-describedby={id}
                    variant="contained"
                    size='small'
                    onClick={handleClick}
                    className={classes.dateTimeRangeButton}
                >
                    {'表示範囲'}
                    <ArrowDropDownIcon style={{ fontSize: 15 }}/>
                </Button>
                <span>{convertTimeString(timeRange[0].startDate) + ' - ' + convertTimeString(timeRange[0].endDate)}</span>
            </Box>
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
