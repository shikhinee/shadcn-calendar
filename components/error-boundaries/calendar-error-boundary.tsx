import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import { Calendar, AlertTriangle } from "lucide-react";

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const CalendarErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
}) => (
  <Alert variant="destructive" className="m-4">
    <Calendar className="h-4 w-4" />
    <AlertTitle>Calendar Error</AlertTitle>
    <AlertDescription className="space-y-4">
      <p>Failed to load calendar: {error.message}</p>
      <div className="flex space-x-2">
        <Button onClick={resetError}>Try Again</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload Page
        </Button>
      </div>
    </AlertDescription>
  </Alert>
);

export class CalendarErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to your error reporting service
    console.error("Calendar error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <CalendarErrorFallback
          error={this.state.error!}
          resetError={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
