import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {useStyles} from "./style";
import clsx from 'clsx';
import {Box} from "@material-ui/core";

const DashBoard = props => {

    const classes = useStyles()
    const {children} = props

    const [open, setOpen] = React.useState(true);

    return (
        <>
            <Header open={open} onToggleDrawer={setOpen}/>
            <div className={classes.wrapper}>
                <Sidebar open={open} onToggleDrawer={setOpen}/>
                <Box
                    border={1}
                    borderColor="#99bbe8"
                    className={clsx(classes.wrapperContent, {
                        [classes.shiftLeft]: !open,
                    })}
                >
                    {children}
                </Box>
            </div>
        </>
    );
};

DashBoard.propTypes = {};

export default DashBoard;
