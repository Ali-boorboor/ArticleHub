import { EditorState } from "@/app/write/_hooks/useEditorState";
import { Editor } from "@tiptap/react";
import * as Icon from "lucide-react";

const useEditorTools = (editorState: EditorState, editor: Editor) => {
  const textFormattingTools = [
    {
      icon: Icon.Bold,
      label: "Toggle Bold",
      pressed: editorState.isBold,
      onPressedChange: () => editor.commands.toggleBold(),
    },
    {
      icon: Icon.Italic,
      label: "Toggle Italic",
      pressed: editorState.isItalic,
      onPressedChange: () => editor.commands.toggleItalic(),
    },
    {
      icon: Icon.Underline,
      label: "Toggle Underline",
      pressed: editorState.isUnderline,
      onPressedChange: () => editor.commands.toggleUnderline(),
    },
    {
      icon: Icon.Strikethrough,
      label: "Toggle Strikethrough",
      pressed: editorState.isStrike,
      onPressedChange: () => editor.commands.toggleStrike(),
    },
    {
      icon: Icon.SubscriptIcon,
      label: "Toggle Subscript",
      pressed: editorState.isSubscript,
      onPressedChange: () => editor.commands.toggleSubscript(),
    },
    {
      icon: Icon.SuperscriptIcon,
      label: "Toggle Superscript",
      pressed: editorState.isSuperscript,
      onPressedChange: () => editor.commands.toggleSuperscript(),
    },
    {
      icon: Icon.LinkIcon,
      label: "Add Link",
      pressed: editorState.isLink,
      onPressedChange: () =>
        editor.commands.toggleLink({
          rel: "noopener noreferrer",
          target: "_blank",
          href: "#",
        }),
    },
  ];

  const alignmentTools = [
    {
      icon: Icon.AlignLeft,
      label: "Align Left",
      pressed: editorState.isAlignLeft,
      onPressedChange: () => editor.commands.setTextAlign("left"),
    },
    {
      icon: Icon.AlignCenter,
      label: "Align Center",
      pressed: editorState.isAlignCenter,
      onPressedChange: () => editor.commands.setTextAlign("center"),
    },
    {
      icon: Icon.AlignRight,
      label: "Align Right",
      pressed: editorState.isAlignRight,
      onPressedChange: () => editor.commands.setTextAlign("right"),
    },
    {
      icon: Icon.PilcrowLeft,
      label: "Direction Right To Left",
      pressed: editorState.isDirectionRight,
      onPressedChange: () => editor.commands.setTextDirection("rtl"),
    },
    {
      icon: Icon.PilcrowRight,
      label: "Direction Left To Right",
      pressed: editorState.isDirectionLeft,
      onPressedChange: () => editor.commands.setTextDirection("ltr"),
    },
  ];

  const blockTools = [
    {
      icon: Icon.Heading3,
      label: "Heading 3",
      pressed: editorState.isH3,
      onPressedChange: () => editor.commands.toggleHeading({ level: 3 }),
    },
    {
      icon: Icon.Heading4,
      label: "Heading 4",
      pressed: editorState.isH4,
      onPressedChange: () => editor.commands.toggleHeading({ level: 4 }),
    },
    {
      icon: Icon.Heading5,
      label: "Heading 5",
      pressed: editorState.isH5,
      onPressedChange: () => editor.commands.toggleHeading({ level: 5 }),
    },
    {
      icon: Icon.List,
      label: "Bullet List",
      pressed: editorState.isBulletList,
      onPressedChange: () => editor.commands.toggleBulletList(),
    },
    {
      icon: Icon.ListOrdered,
      label: "Ordered List",
      pressed: editorState.isOrderedList,
      onPressedChange: () => editor.commands.toggleOrderedList(),
    },
    {
      icon: Icon.CodeXml,
      label: "Code Block",
      pressed: editorState.isCodeBlock,
      onPressedChange: () => editor.commands.toggleCodeBlock(),
    },
  ];

  return { textFormattingTools, alignmentTools, blockTools };
};

export default useEditorTools;
