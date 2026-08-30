import ToolbarToggle from "@/app/write/_components/editor/ToolbarToggle";
import useEditorStates from "@/app/write/_hooks/useEditorState";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import * as Icon from "lucide-react";

interface ToolsProps {
  editor: Editor;
}

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

const Tools = ({ editor }: ToolsProps) => {
  const editorState = useEditorStates(editor);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files?.[0];

    if (!file || !(file instanceof File)) {
      toast.add({
        type: "error",
        title: "Invalid image",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.add({
        type: "error",
        title: "Invalid image",
        description: "Image is too large, Max size is 1MB!",
      });
      return;
    }

    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      toast.add({
        type: "error",
        title: "Invalid image",
        description:
          "Invalid file type! Only PNG, JPG/JPEG, and WEBP are allowed.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      editor.commands.setImage({
        src: data.url,
        alt: "Article Image",
      });

      toast.add({
        type: "success",
        title: "Image uploaded successfully",
        description: "Image has been saved successfully.",
      });
    } catch {
      toast.add({
        type: "error",
        title: "Image upload failed",
        description:
          "There was an error uploading the image. Please try again.",
      });
    }
  };

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

  return (
    <header className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {textFormattingTools.map((tool) => (
          <ToolbarToggle key={tool.label} {...tool} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {alignmentTools.map((tool) => (
          <ToolbarToggle key={tool.label} {...tool} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {blockTools.map((tool) => (
          <ToolbarToggle key={tool.label} {...tool} />
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                aria-label="Add Attachment"
                variant="outline"
                size="icon-lg"
              >
                <Icon.Paperclip aria-hidden />
              </Button>
            }
          />
          <DropdownMenuContent className="w-fit **:cursor-pointer">
            <DropdownMenuItem
              render={
                <label
                  className={cn(buttonVariants({ variant: "ghost" }))}
                  htmlFor="image-uploader"
                >
                  <Icon.ImageIcon className="size-4" aria-hidden />
                  Upload Image
                </label>
              }
            />
          </DropdownMenuContent>
          <Input
            accept="image/png, image/jpg, image/jpeg, image/webp"
            onChange={(event) => handleImageUpload(event)}
            id="image-uploader"
            type="file"
            hidden
          />
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Tools;
