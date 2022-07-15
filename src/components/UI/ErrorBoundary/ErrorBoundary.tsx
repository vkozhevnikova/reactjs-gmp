import React, { Component, ErrorInfo } from 'react';
import { IErrorBoundaryProps } from './interfaces';
import { Message } from './Message';

export class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state = {
    error: '',
  };

  // eslint-disable-next-line no-console
  logErrorToServices = console.error;

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.logErrorToServices('Uncaught error:', error, info);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <Message />;
    }

    return children;
  }
}
