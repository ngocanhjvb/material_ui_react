import React from 'react';
import {Route} from 'react-router-dom'
import DashBoard from "../DashBoard";

const AdminLayOutRoute = props => {

    const {component: MyComponent, ...rest} = props
    return (
        <Route render={routeProps => {
            return (
                <DashBoard {...rest}>
                    <MyComponent {...routeProps}/>
                </DashBoard>
            )
        }}/>
    );
};

AdminLayOutRoute.propTypes = {};

export default AdminLayOutRoute;
