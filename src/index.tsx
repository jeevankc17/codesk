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
import ErrorBoundary from './components/common/ErrorBoundary';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Add debug logs
console.log('Starting app initialization');
console.log('Clerk key exists:', !!PUBLISHABLE_KEY);

// read common env var names used in CRA/Next/Vite setups
const clerkPublishableKey =
  process.env.REACT_APP_CLERK_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ??
  process.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY ??
  '';

console.log('Clerk key exists:', !!clerkPublishableKey);

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
            <ErrorBoundary>
              {clerkPublishableKey ? (
                <ClerkProvider publishableKey={clerkPublishableKey}>
                  <App />
                </ClerkProvider>
              ) : (
                // Render the app without Clerk (warn in console)
                <>
                  {/* Optional: show a small dev-only banner indicating auth is disabled */}
                  <App />
                </>
              )}
            </ErrorBoundary>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize app:', error);
}
