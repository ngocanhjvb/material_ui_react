import React from 'react';
import {Box} from "@material-ui/core";

const TitlePanel = props => {
    const {children} = props
    return (
        <Box component="h1">
            {children}
        </Box>
    );
};

TitlePanel.propTypes = {

};

export default TitlePanel;
