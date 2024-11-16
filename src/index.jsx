import React from 'react';
import { createRoot } from 'react-dom/client';  // React 18 way to render
import { Provider } from 'react-redux';        // Import Redux Provider
import { store } from './store/store';         // Import the store
import App from './App';                       // Import the App component
import './index.css';                          // Import global CSS styles

// Get the root DOM element where the app will be rendered
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot API
const root = createRoot(rootElement);

// Render the app wrapped with the Redux Provider, passing the store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
