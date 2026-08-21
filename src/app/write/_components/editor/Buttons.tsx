import { Button } from "@/components/ui/button";
import { type Editor } from "@tiptap/react";

interface ButtonsProps {
  editor: Editor;
}

const Buttons = ({ editor }: ButtonsProps) => {
  return (
    <footer className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <Button
        onClick={() => {
          console.log(editor.getHTML());
        }}
        className="flex-1 max-w-96"
      >
        Save
      </Button>

      <Button className="flex-1 max-w-96" variant="outline">
        Draft
      </Button>
    </footer>
  );
};

export default Buttons;
