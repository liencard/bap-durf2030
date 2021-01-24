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
      active: `#e62336`, // geel
      hover: `#ffed00`,
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
  overrides: {
    // FORM - Inputs & labels
    MuiOutlinedInput: {
      root: {
        marginBottom: '2rem',
        marginTop: '1rem',
        '&:hover fieldset': {
          borderColor: '#54bbab !important',
        },
      },
      notchedOutline: {
        borderColor: '#e1e2e7',
      },
    },
    MuiInputLabel: {
      root: {
        marginTop: '1rem',
        fontSize: '1.6rem',
        color: '#0c1424',
        letterSpacing: '0.1rem',
        fontWeight: 300,
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '1.6rem',
        color: '#0c1424',
      },
    },

    // FORM - Switch
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(84, 187, 171, 0.1)',
        },
      },
    },
    // FORM - Dropdown
    MuiSelect: {
      icon: {
        color: '#d8d8d8',
      },
      select: {
        '&:focus': {
          backgroundColor: 'white',
        },
      },
    },
  },
});

export default theme;
