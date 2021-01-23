import '../styles/globals.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// https://material-ui.com/customization/palette/
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: {
      light: `#d8eded`,
      main: `#54bbab`,
      dark: `#369283`,
    },
    secondary: {
      light: `#f6dfe1`,
      main: `#e62336`,
      dark: `#e62336`,
    },
    error: {
      light: `#f6dfe1`,
      main: `#e62336`,
      dark: `#e62336`,
    },
    action: {
      active: `#ffed00`,
      hover: `#ffed00`,
      selected: `#ffed00`,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontWeightRegular: 300,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.6rem',
    button: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      textTransform: 'capitalize',
      fontSize: '1.6rem',
    },
    overline: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      textTransform: 'capitalize',
      fontSize: '1.6rem',
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
