import React, {useState} from 'react';
import {Box, Button, Menu, MenuItem} from "@material-ui/core";
import {useStyles} from "./style";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {TIME_FILTER} from "../../../constants";
let _ = require('lodash');

const TimeFilter = props => {

    const {timeFilter, setTimeFilter} = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const handleTimeFilterOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTimeFilterClose = (time) => {
        setTimeFilter(time)
        setAnchorEl(null);
    };
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const id = open ? 'time-filter-menu' : undefined;

    const renderTimeFilter = () => {

        let menuItemFilter = TIME_FILTER.map((type) => (
            <MenuItem key={type.value} onClick={() => handleTimeFilterClose(type.value)}>
                {type.name}
                {timeFilter === type.value && <ArrowDropDownIcon style={{fontSize: 15}}/>}
            </MenuItem>
        ));
        return menuItemFilter;
    };

    const renderTimeTitle = () => {
        let timeTitle = null;
        let index = _.findIndex(TIME_FILTER, function (o) {
            return o.value === timeFilter;
        });
        if (index !== -1) {
            timeTitle = TIME_FILTER[index].name;
        }
        return timeTitle
    };


    return (
        <>
            <Box className={classes.timeFilterBox}>
                <Button
                    aria-describedby={id}
                    variant="contained"
                    size='small'
                    onClick={handleTimeFilterOpen}
                    className={classes.timeFilterButton}>
                    {renderTimeTitle()}
                    <ArrowDropDownIcon style={{fontSize: 15}}/>
                </Button>
                <HelpOutlineIcon/>
            </Box>


            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={() => handleTimeFilterClose(timeFilter)}
            >
                {renderTimeFilter()}
            </Menu>

        </>
    );
};

TimeFilter.propTypes = {};

export default TimeFilter;
