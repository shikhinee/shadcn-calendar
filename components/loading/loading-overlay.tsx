import { Spinner } from "./spinner";

interface LoadingOverlayProps {
  message?: string;
}

export const LoadingOverlay = ({
  message = "Loading...",
}: LoadingOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size="lg" />
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};
