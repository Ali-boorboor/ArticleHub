"use client";

import Buttons from "@/app/write/_components/editor/Buttons";
import Tools from "@/app/write/_components/editor/Tools";
import useEditor from "@/app/write/_hooks/useEditor";
import { EditorContent } from "@tiptap/react";

const Editor = () => {
  const editor = useEditor();

  if (!editor) return null;

  return (
    <section className="grid gap-2 min-w-0">
      <Tools editor={editor} />

      <EditorContent className="min-w-0 w-full max-w-full" editor={editor} />

      <Buttons editor={editor} />
    </section>
  );
};

export default Editor;
