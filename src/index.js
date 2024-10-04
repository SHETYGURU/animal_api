// Path: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Create a root element where your React app will be rendered
const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
