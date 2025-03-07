import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>
)
