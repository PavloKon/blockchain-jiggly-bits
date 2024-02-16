import React from 'react';
import { ThemeProvider } from '@mui/material';
import Routes from './routes';
import { AppThemeProvider } from './themes';

function App() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}

export default App;
