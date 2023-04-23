import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Portfolio } from './portfolio'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Portfolio />
    </React.StrictMode>
);