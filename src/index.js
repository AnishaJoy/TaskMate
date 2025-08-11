import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // global CSS styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // enables routing in React

// Create the root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App inside BrowserRouter so routes work
root.render(
  <React.StrictMode> {/* Helps find potential problems in development */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: measure app performance
// You can pass console.log to see metrics in console
reportWebVitals();
