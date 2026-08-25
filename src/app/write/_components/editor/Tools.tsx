import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { type Editor, useEditorState } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  CodeXml,
  Heading3,
  Heading4,
  Heading5,
  ImageUp,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Paperclip,
  PilcrowLeft,
  PilcrowRight,
  Strikethrough,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  Underline,
} from "lucide-react";

interface ToolsProps {
  editor: Editor;
}

const Tools = ({ editor }: ToolsProps) => {
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

  return (
    <header className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        <Toggle
          onPressedChange={() => editor.commands.toggleBold()}
          pressed={editorState?.isBold ?? false}
          aria-label="Toggle Bold"
          variant="primary"
          size="lg"
        >
          <Bold aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleItalic()}
          pressed={editorState?.isItalic ?? false}
          aria-label="Toggle Italic"
          variant="primary"
          size="lg"
        >
          <Italic aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleUnderline()}
          pressed={editorState?.isUnderline ?? false}
          aria-label="Toggle Underline"
          variant="primary"
          size="lg"
        >
          <Underline aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleStrike()}
          pressed={editorState?.isStrike ?? false}
          aria-label="Toggle Strikethrough"
          variant="primary"
          size="lg"
        >
          <Strikethrough aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleSubscript()}
          pressed={editorState?.isSubscript ?? false}
          aria-label="Toggle Subscript"
          variant="primary"
          size="lg"
        >
          <SubscriptIcon aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleSuperscript()}
          pressed={editorState?.isSuperscript ?? false}
          aria-label="Toggle Superscript"
          variant="primary"
          size="lg"
        >
          <SuperscriptIcon aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => {
            editor.commands.setLink({
              rel: "noopener noreferrer",
              target: "_blank",
              href: "#",
            });
          }}
          pressed={editorState?.isLink ?? false}
          aria-label="Add Link"
          variant="primary"
          size="lg"
        >
          <LinkIcon aria-hidden />
        </Toggle>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        <Toggle
          onPressedChange={() => editor.commands.setTextAlign("left")}
          pressed={editorState?.isAlignLeft ?? false}
          aria-label="Toggle Align Left"
          variant="primary"
          size="lg"
        >
          <AlignLeft aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.setTextAlign("center")}
          pressed={editorState?.isAlignCenter ?? false}
          aria-label="Toggle Align Center"
          variant="primary"
          size="lg"
        >
          <AlignCenter aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.setTextAlign("right")}
          pressed={editorState?.isAlignRight ?? false}
          aria-label="Toggle Align Right"
          variant="primary"
          size="lg"
        >
          <AlignRight aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.setTextDirection("rtl")}
          pressed={editorState?.isDirectionRight ?? false}
          aria-label="Toggle Direction Right To Left"
          variant="primary"
          size="lg"
        >
          <PilcrowLeft aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.setTextDirection("ltr")}
          pressed={editorState?.isDirectionLeft ?? false}
          aria-label="Toggle Direction Left To Right"
          variant="primary"
          size="lg"
        >
          <PilcrowRight aria-hidden />
        </Toggle>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        <Toggle
          onPressedChange={() => editor.commands.toggleHeading({ level: 3 })}
          pressed={editorState?.isH3 ?? false}
          aria-label="Toggle Heading3"
          variant="primary"
          size="lg"
        >
          <Heading3 aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleHeading({ level: 4 })}
          pressed={editorState?.isH4 ?? false}
          aria-label="Toggle Heading4"
          variant="primary"
          size="lg"
        >
          <Heading4 aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleHeading({ level: 5 })}
          pressed={editorState?.isH5 ?? false}
          aria-label="Toggle Heading5"
          variant="primary"
          size="lg"
        >
          <Heading5 aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleBulletList()}
          pressed={editorState?.isBulletList ?? false}
          aria-label="Toggle List"
          variant="primary"
          size="lg"
        >
          <List aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleOrderedList()}
          pressed={editorState?.isOrderedList ?? false}
          aria-label="Toggle Ordered List"
          variant="primary"
          size="lg"
        >
          <ListOrdered aria-hidden />
        </Toggle>

        <Toggle
          onPressedChange={() => editor.commands.toggleCodeBlock()}
          pressed={editorState?.isCodeBlock ?? false}
          aria-label="Toggle Code Block"
          variant="primary"
          size="lg"
        >
          <CodeXml aria-hidden />
        </Toggle>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                aria-label="Add Attachment"
                variant="outline"
                size="icon-lg"
              >
                <Paperclip aria-hidden />
              </Button>
            }
          />
          <DropdownMenuContent className="w-fit **:[[role='menuitem']]:cursor-pointer">
            <DropdownMenuItem
              onClick={() => {
                editor.commands.setImage({
                  src: "/test-img.jpg",
                  alt: "Article Image",
                });
              }}
              aria-label="Upload Image"
            >
              <ImageUp aria-hidden />
              Upload Image
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Tools;
