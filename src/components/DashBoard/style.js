import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    wrapperContent: {
        width: '100%',
        padding: 10,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        margin:4,
        height: '100%',
        backgroundColor:'#D4E0F2',
    },
    shiftLeft: {
        marginLeft: -240,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));
