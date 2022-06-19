import * as React from 'react';
import { ErrorBoundry } from './components/ErrorBoundry/ErrorBoundry';
import MainPage from './pages/MainPage/MainPage';

export const App: React.FC = () => (
  <ErrorBoundry>
    <MainPage />
  </ErrorBoundry>
);
