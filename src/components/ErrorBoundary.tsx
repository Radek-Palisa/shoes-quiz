import { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  errorMessage: string | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, errorMessage: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorMessage: error?.message || null };
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          {errorMessage && <p>{errorMessage}</p>}
        </>
      );
    }

    return children;
  }
}
