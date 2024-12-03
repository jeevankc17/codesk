import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material';

import './global.css';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file');
}

const muiTheme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ClerkProvider
          publishableKey={PUBLISHABLE_KEY}
          afterSignInUrl="/"
          afterSignUpUrl="/"
          afterSignOutUrl="/"
        >
          <App />
        </ClerkProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// Remove duplicate reportWebVitals call
reportWebVitals();
