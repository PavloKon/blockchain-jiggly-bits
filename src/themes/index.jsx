import React, { useMemo } from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider, ThemeOptions, responsiveFontSizes, PaletteColor } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { INITIAL_THEME } from './configTheme';

const AppThemeProvider = ({ children }) => {
  const themeOptions = INITIAL_THEME;
  let theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { AppThemeProvider, INITIAL_THEME };
