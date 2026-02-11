// main.jsx - Entry point for Vite React app
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithRouter from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);
