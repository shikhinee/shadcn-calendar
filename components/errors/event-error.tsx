import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";

interface EventErrorProps {
  title: string;
  message: string;
  onRetry?: () => void;
}

export const EventError = ({ title, message, onRetry }: EventErrorProps) => (
  <Alert variant="destructive" className="mb-4">
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription className="space-y-2">
      <p>{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      )}
    </AlertDescription>
  </Alert>
);
