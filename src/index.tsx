import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material';

import './global.css?type=style';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Add debug logs
console.log('Starting app initialization');
console.log('Clerk key exists:', !!PUBLISHABLE_KEY);



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
            <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
              <App />
            </ClerkProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize app:', error);
}
