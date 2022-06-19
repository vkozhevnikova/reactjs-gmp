import React, { Component } from 'react';
import { IErrorBoundryProps } from './IErrorBoundryProps';
import { Message } from './Message';

export class ErrorBoundry extends Component<IErrorBoundryProps> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Message />;
    }

    return children;
  }
}
