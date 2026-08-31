import ToolbarToggle from "@/app/write/_components/editor/ToolbarToggle";
import useEditorStates from "@/app/write/_hooks/useEditorState";
import useEditorTools from "@/app/write/_hooks/useEditorTools";
import useUploader from "@/app/write/_hooks/useUploader";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ALLOWED_CONTENT_TYPES } from "@/constants/uploader";
import { cn } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import * as Icon from "lucide-react";

interface ToolsProps {
  editor: Editor;
}

const Tools = ({ editor }: ToolsProps) => {
  const editorState = useEditorStates(editor);
  const tools = useEditorTools(editorState, editor);
  const { handleImageUpload } = useUploader(editor);

  return (
    <header className="flex flex-wrap gap-4 items-center justify-between bg-sidebar p-2 rounded-lg border shadow">
      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {tools.textFormattingTools.map((tool) => (
          <ToolbarToggle key={tool.label} {...tool} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {tools.alignmentTools.map((tool) => (
          <ToolbarToggle key={tool.label} {...tool} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 lg:flex-none lg:justify-normal">
        {tools.blockTools.map((tool) => (
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
            accept={ALLOWED_CONTENT_TYPES.join(",")}
            onChange={handleImageUpload}
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
