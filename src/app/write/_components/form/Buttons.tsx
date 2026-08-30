import useDraft from "@/app/write/_hooks/useDraft";
import { Button } from "@/components/ui/button";
import { type Editor } from "@tiptap/react";
import { Save, Send, Trash } from "lucide-react";

interface ButtonsProps {
  editor: Editor;
}

const Buttons = ({ editor }: ButtonsProps) => {
  const { saveDraft, deleteDraft } = useDraft(editor);

  return (
    <footer className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <Button
        onClick={() => deleteDraft()}
        className="flex-1 max-w-96"
        variant="destructive"
        type="button"
        size="lg"
      >
        <Trash aria-hidden />
        Delete Draft
      </Button>

      <Button
        onClick={() => saveDraft()}
        className="flex-1 max-w-96"
        variant="outline"
        type="button"
        size="lg"
      >
        <Save aria-hidden />
        Save Draft
      </Button>

      <Button className="flex-1 max-w-96" type="submit" size="lg">
        <Send aria-hidden />
        Publish
      </Button>
    </footer>
  );
};

export default Buttons;
