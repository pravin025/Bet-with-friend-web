import {createTheme} from  '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createTheme({
    palette:{
        primary:amber,
        secondary : lightBlue
    }
});

export default theme