import React from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
