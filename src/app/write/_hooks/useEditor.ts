import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const useTipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class:
              "md:[h3]:text-3xl [h3]:text-2xl md:[h4]:text-2xl [h4]:text-xl md:[h5]:text-xl [h5]:text-lg font-medium",
          },
        },
        link: {
          defaultProtocol: "https",
          protocols: ["http", "https"],
          HTMLAttributes: {
            class: cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer px-0 text-sidebar-primary",
            ),
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc px-4 marker:text-sidebar-primary",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal px-4 marker:text-sidebar-primary",
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
            "mx-auto w-full max-h-100 object-cover aspect-video border shadow rounded-lg",
        },
      }),
      CodeBlock.configure({
        tabSize: 2,
        enableTabIndentation: true,
        HTMLAttributes: {
          class:
            "mx-auto bg-secondary text-secondary-foreground px-2 py-1 rounded-lg border shadow max-w-full max-h-96 [&_code]:text-nowrap overflow-auto scrollbar-thin scrollbar-track-sidebar-accent scrollbar-thumb-sidebar-primary scroll-fade-t",
          dir: "ltr",
        },
      }),
      Subscript,
      Superscript,
    ],
    immediatelyRender: false,
    textDirection: "ltr",
    editorProps: {
      attributes: {
        class:
          "container min-h-50 h-[70svh] overflow-y-auto scrollbar-thin scrollbar-track-sidebar-accent scrollbar-thumb-sidebar-primary scroll-fade leading-8 space-y-4 rounded-lg border border-input shadow bg-sidebar p-2 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm group-aria-invalid:border-destructive group-aria-invalid:ring-3 group-aria-invalid:ring-destructive/20",
      },
    },
  });

  return editor;
};

export default useTipTapEditor;
