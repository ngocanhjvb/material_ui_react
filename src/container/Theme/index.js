import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    color:{
        backgroundColor:'#000',
        defaultTextColor: '#0000EE',
        active:'rgba(0,0,0,0.08)',
    },
    groupBackGroupColor:{
        color:'#F6F6F6'
    },
    buttonStyle: {
        backgroundColor:'#D0DEF0',
        color:"#000"
    },
});

export default theme
