import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure the CSS file is properly linked

import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // For routing
import { ErrorBoundary } from './components/ErrorBoundary'; // Custom error boundary
import { GlobalProvider } from './context/GlobalContext'; // Assuming you use context for state

// Create a root for React to render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping App with ErrorBoundary for production error handling */}
    <ErrorBoundary>
      {/* Wrapping App with Router for page navigation */}
      <Router>
        {/* Wrapping App with GlobalContext for managing global state */}
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </Router>
    </ErrorBoundary>
  </StrictMode>
);
