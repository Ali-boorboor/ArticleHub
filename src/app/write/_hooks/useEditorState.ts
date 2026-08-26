import { type Editor, useEditorState } from "@tiptap/react";

const useEditorStates = (editor: Editor) => {
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor?.isActive("bold") ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      isUnderline: editor?.isActive("underline") ?? false,
      isStrike: editor?.isActive("strike") ?? false,
      isSubscript: editor?.isActive("subscript") ?? false,
      isSuperscript: editor?.isActive("superscript") ?? false,
      isLink: editor?.isActive("link") ?? false,
      isAlignLeft: editor?.isActive({ textAlign: "left" }) ?? false,
      isAlignCenter: editor?.isActive({ textAlign: "center" }) ?? false,
      isAlignRight: editor?.isActive({ textAlign: "right" }) ?? false,
      isDirectionRight:
        editor?.isActive("paragraph", { dir: "rtl" }) ||
        editor?.isActive("heading", { dir: "rtl" }) ||
        false,
      isDirectionLeft:
        editor?.isActive("paragraph", { dir: "ltr" }) ||
        editor?.isActive("heading", { dir: "ltr" }) ||
        false,
      isH3: editor?.isActive("heading", { level: 3 }) ?? false,
      isH4: editor?.isActive("heading", { level: 4 }) ?? false,
      isH5: editor?.isActive("heading", { level: 5 }) ?? false,
      isBulletList: editor?.isActive("bulletList") ?? false,
      isOrderedList: editor?.isActive("orderedList") ?? false,
      isCodeBlock: editor?.isActive("codeBlock") ?? false,
    }),
  });

  return editorState;
};

export default useEditorStates;
