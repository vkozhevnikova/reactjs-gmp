import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './core/store';
import { App } from './App';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
);
