import React, { ReactNode, ErrorInfo } from 'react';
import { AlertCircle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="flex justify-center mb-4">
                <AlertCircle className="w-16 h-16 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Oops!</h1>
              <p className="text-slate-400 mb-6">
                Something went wrong. We're sorry for the inconvenience.
              </p>
              {import.meta.env.DEV && this.state.error && (
                <pre className="bg-slate-950 text-red-400 p-4 rounded-lg mb-6 text-xs overflow-auto max-h-32 text-left">
                  {this.state.error.toString()}
                </pre>
              )}
              <button
                onClick={this.handleReset}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
