import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // rapping the whole application with BrowserRouter so as to use
  // routing to navigater
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


