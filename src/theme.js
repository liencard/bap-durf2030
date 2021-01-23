import { createMuiTheme } from '@material-ui/core/styles';

// https://material-ui.com/customization/palette/
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
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
      active: `#d8d8d8`, // rood
      hover: `#d8eded`, // geel
      selected: `#ffed00`,
    },
    background: {
      default: '#fff',
    },
  },
  // shadows: ['none'],
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontWeightRegular: 300,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 25.6,
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
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.7 },
  },
  // overrides: {
  //   PrivateNotchedOutline: {
  //     legend: {
  //       width: '400px',
  //     },
  //   },
  // },
});

export default theme;
