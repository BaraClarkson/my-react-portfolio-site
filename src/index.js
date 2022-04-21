import React from 'react';
import App from './App';
import {ThemeContext } from './context';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);





