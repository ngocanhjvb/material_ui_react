import React from 'react';
import {Box} from "@material-ui/core";

const Overview = props => {

    const {children} = props;

    return (
        <Box component="h1">{children}</Box>
    );
};

Overview.propTypes = {};

export default Overview;
