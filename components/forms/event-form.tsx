import { Button } from "../ui/button";
import { Spinner } from "../loading/spinner";

interface EventFormProps {
  // ... other props
  isLoading: boolean;
}

export const EventForm = ({ isLoading, ...props }: EventFormProps) => {
  return (
    <form>
      {/* ... form fields */}
      <Button disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Saving...
          </>
        ) : (
          "Save Event"
        )}
      </Button>
    </form>
  );
};
