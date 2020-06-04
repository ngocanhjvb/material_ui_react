import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Divider, List, ListItem, ListSubheader} from "@material-ui/core";
import {useStyles} from "./style";
import {ADMIN_ROUTES, GROUP_NAME} from "../../../constants";
import {NavLink} from "react-router-dom";

const Sidebar = props => {

    const classes = useStyles();

    const {open, onToggleDrawer} = props;

    const handleToggleDrawer = () => {
        onToggleDrawer(!open)
    };

    const renderList = () => {
        let xhtml = null;
        xhtml = (
            <>
                {GROUP_NAME.map(group => {
                    const groupFiltered = ADMIN_ROUTES.filter(
                        route => route.group === group.value,
                    );
                    return (
                        <List
                            key={group.name}
                            component="nav"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" className={classes.subHeader}>
                                    {group.name}
                                </ListSubheader>
                            }
                        >
                            <Divider/>
                            {groupFiltered.map(item => {
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        exact={item.exact}
                                        className={classes.menuLink}
                                        activeClassName={classes.menuLinkActive}
                                    >
                                        <ListItem button>
                                            {item.name}
                                        </ListItem>
                                    </NavLink>
                                );
                            })}
                            <Divider/>
                        </List>
                    )
                })}
            </>
        );
        return xhtml;
    }

    return (
        <Drawer
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={handleToggleDrawer}
            variant="persistent"
        >
            {renderList()}
        </Drawer>
    );
};

Sidebar.propTypes = {};

export default Sidebar;
