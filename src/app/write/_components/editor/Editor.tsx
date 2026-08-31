import EditorError from "@/app/write/_components/editor/EditorError";
import Tools from "@/app/write/_components/editor/Tools";
import { EditorContent, type Editor as EditorType } from "@tiptap/react";

interface EditorProps {
  editor: EditorType;
}

const Editor = ({ editor }: EditorProps) => {
  return (
    <>
      <Tools editor={editor} />

      <EditorError />

      <EditorContent
        className="min-w-0 w-full max-w-full group"
        editor={editor}
      />
    </>
  );
};

export default Editor;
