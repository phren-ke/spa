import { ThemeOptions } from '@mui/material/styles';
const {createTheme} = require('@mui/material')

 
  

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#d21d1d',
      contrastText: '#ffebee',
    },
    success: {
      main: '#35b93c',
      light: '#5fcb65',
      dark: '#21a828',
      contrastText: 'rgba(0,0,0,0.96)',
    },
  },
  typography: {
    fontFamily: 'Droid Sans',
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h1: {
      fontFamily: 'Droid Sans',
      fontSize: '6.1rem',
      fontWeight: 400,
    },
    h2: {
      fontWeight: 400,
      fontSize: '4.2rem',
      lineHeight: 1.28,
    },
    h3: {
      fontFamily: 'Open Sans',
      fontSize: '3rem',
      fontWeight: 300,
    },
    h4: {
      fontFamily: 'Open Sans',
      fontWeight: 300,
    },
    h5: {
      fontFamily: 'Open Sans',
      fontSize: '1.9rem',
      lineHeight: 1.24,
    },
    h6: {
      fontFamily: 'Open Sans',
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1.42,
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 500,
      lineHeight: 1.58,
    },
    button: {
      fontSize: '0.8rem',
      fontWeight: 500,
      lineHeight: 1.76,
    },
    caption: {
      fontWeight: 400,
      lineHeight: 1.74,
      fontSize: '0.9rem',
    },
  },
  spacing: 8,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiAppBar: {
      color: 'transparent',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
};
