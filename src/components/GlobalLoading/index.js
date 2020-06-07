import React from 'react';
import {useStyles} from "./style";
import {useSelector} from "react-redux";
import LoadingIcon from './../../assets/images/loading.gif';


const GlobalLoading = props => {

    const classes = useStyles();

    const showLoading = useSelector(state => state.ui.showLoading)

    let xhtml = null;
    if (showLoading) {
        xhtml = (
            <div className={classes.globalLoading}>
                <img src={LoadingIcon} alt="loading" className={classes.icon}/>
            </div>
        );
    }
    return xhtml;
};

GlobalLoading.propTypes = {};

export default GlobalLoading;
