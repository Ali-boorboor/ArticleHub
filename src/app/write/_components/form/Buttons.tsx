import useDraft from "@/app/write/_hooks/useDraft";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  const { saveDraft } = useDraft();

  return (
    <footer className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <Button className="flex-1 max-w-96" type="submit">
        Publish
      </Button>

      <Button
        onClick={() => saveDraft()}
        className="flex-1 max-w-96"
        variant="outline"
        type="button"
      >
        Save Draft
      </Button>
    </footer>
  );
};

export default Buttons;
