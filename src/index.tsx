import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material';

import './global.css?type=style';

try {
  const muiTheme = createTheme();
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Root element not found');
  }

  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
              <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize app:', error);
}
