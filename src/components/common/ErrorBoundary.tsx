import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // keep console output for debugging
    console.error('Unhandled error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        // Keep this simple; you can style or localize as needed.
        <div style={{ padding: 24, textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p>Check the console for details. The app is running in degraded mode.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
