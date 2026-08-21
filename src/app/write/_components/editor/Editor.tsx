"use client";

import Buttons from "@/app/write/_components/editor/Buttons";
import Tools from "@/app/write/_components/editor/Tools";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class:
              "md:[h1]:text-4xl [h1]:text-5xl md:[h2]:text-2xl [h2]:text-3xl md:[h3]:text-lg [h3]:text-xl [h1]:font-bold [h2]:font-semibold [h3]:font-medium",
          },
        },
        link: {
          defaultProtocol: "https",
          protocols: ["http", "https"],
          HTMLAttributes: {
            class: cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer px-0",
            ),
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc px-6",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal px-6",
          },
        },
        codeBlock: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
      }),
      Image.configure({
        HTMLAttributes: {
          class:
            "mx-auto my-4 w-full max-h-100 object-cover aspect-video border shadow rounded-lg",
        },
      }),
      CodeBlock.configure({
        tabSize: 2,
        enableTabIndentation: true,
        HTMLAttributes: {
          class:
            "mx-auto my-4 bg-secondary text-secondary-foreground px-2 py-1 rounded-lg border shadow max-w-full max-h-96 [&_code]:text-nowrap overflow-auto scrollbar-thin scrollbar-track-sidebar-accent scrollbar-thumb-sidebar-primary scroll-fade-t",
        },
      }),
      Subscript,
      Superscript,
    ],
    content: "<p>Write your Article here!</p>",
    immediatelyRender: false,
    textDirection: "ltr",
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          "container min-h-50 h-[70svh] overflow-y-auto scrollbar-thin scrollbar-track-sidebar-accent scrollbar-thumb-sidebar-primary scroll-fade leading-8 rounded-lg border border-input shadow bg-sidebar p-2 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm",
      },
    },
  });

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
