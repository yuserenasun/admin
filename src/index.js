import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/ContextProvider';

// Hook react app to root in div
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);