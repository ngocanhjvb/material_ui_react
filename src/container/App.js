import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {ADMIN_ROUTES} from "../constants";
import AdminLayOutRoute from "../components/AdminLayOutRoute";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./Theme";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import configureStore from "../configureStore";

const store = configureStore();

function App() {

    const renderAdminRoute = () => {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route, index) => {
            return (
                <AdminLayOutRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    name={route.name}
                />
            )
        })
        return xhtml
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <Switch>
                            {renderAdminRoute()}
                        </Switch>
                    </CssBaseline>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
