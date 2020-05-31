import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: theme.color.backgroundColor
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'block',
        // },
    },
    sectionDesktop: {
        // display: 'none',
        // [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        // },
    },
}));
