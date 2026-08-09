import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';

import { TasksProvider } from './TasksContext'; 
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TasksProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </TasksProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);