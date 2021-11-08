import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        margin: "0 auto",
        minWidth: "800px"
      }
    },
    MuiOutlinedInput: {
      root: {
        width: "100%",
        height: "248px"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    },
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff'
      },
    },
    MuiDivider: {
      root: {
        margin: "16px"
      }
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;
