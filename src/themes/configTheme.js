import { createTheme, PaletteColor } from '@mui/material/styles';
import { purple } from "@mui/material/colors";

const { palette } = createTheme();

const PALETTE = {
  palette: {
    // mode: 'light',
    background: {
      default: '#fff'
    },
    primary: {
      main: '#13B3E8'
    },
    secondary: {
      main: '#13B3E81A'
    },
    txtFirst: '#F3689F',
    txtTitle: '#2F5765',
    txtContent: '#688792',
    
    // background: {
    //   paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    //   default: '#FFFFFF',
    // },
  }
};

const BREAK_POINT = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 400,
    },
  },
};

const COMPONENTS = {
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   }
    // }
  }
};

const TYPOGRAPHY = {
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h4: {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '160%'
    },
    h5: {
      fontSize: '21px',
      fontWeight: 600,
      lineHeight: '160%'
    },
    h6: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '160%'
    },
    body1: {
      fontSize: '18px',
      lineHeight: '160%',
    },
    body2: {
      fontSize: '15px',
      lineHeight: '160%'
    }
  }
}

export const INITIAL_THEME = {
  ...BREAK_POINT,
  ...COMPONENTS,
  ...PALETTE,
  ...TYPOGRAPHY,
};