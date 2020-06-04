import React, {useState} from 'react';
import {Button, Menu, MenuItem} from "@material-ui/core";
import {useStyles} from "./style";

const TimeFilter = props => {

    const {timeFilter, setTimeFilter} = props

    const [anchorEl, setAnchorEl] = useState(null);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = (time) => {
        setTimeFilter(time)
        setAnchorEl(null);
    };
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleProfileMenuOpen}
                    className={classes.timeFilter}>
                {'表示範囲'}
            </Button>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={open}
                onClose={handleProfileMenuClose}
            >
                <MenuItem onClick={() =>handleProfileMenuClose('time')}>Hour</MenuItem>
                <MenuItem onClick={() =>handleProfileMenuClose('da')}>Day of Week</MenuItem>
                <MenuItem onClick={() =>handleProfileMenuClose('day')}>Days</MenuItem>
                <MenuItem onClick={() =>handleProfileMenuClose('week')}>Weeks</MenuItem>
                <MenuItem onClick={() =>handleProfileMenuClose('month')}>Months</MenuItem>
            </Menu>
        </>
    );
};

TimeFilter.propTypes = {};

export default TimeFilter;
