import { createTheme } from '@mui/material/styles';
import { green, indigo, pink, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[800],
    },
    secondary: {
      main: indigo[50],
    },
    error: {
      main: red.A400,
    },
  }
});
export default theme;
