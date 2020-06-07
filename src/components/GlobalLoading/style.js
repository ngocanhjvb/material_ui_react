import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    globalLoading: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99,
        background: 'rgba(0, 0, 0, 0.4)',
    },
    icon: {
        position: 'fixed',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '40%',
        width: 100,
    },
}));
