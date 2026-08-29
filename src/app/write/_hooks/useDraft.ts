import { toast } from "@/components/ui/toast";
import { type Editor, type JSONContent } from "@tiptap/react";
import { useCallback, useEffect } from "react";

export interface DraftData {
  content: JSONContent;
  savedAt: string;
}

const DRAFT_STORAGE_KEY = "article-hub-write-draft";

const useDraft = (editor: Editor | null) => {
  const saveDraft = useCallback(() => {
    if (!editor || typeof window === "undefined") return;

    const draft: DraftData = {
      content: editor.getJSON(),
      savedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));

      toast.add({
        type: "success",
        title: "Draft saved",
        description: "Your article draft has been saved locally.",
      });
    } catch {
      toast.add({
        type: "error",
        title: "Failed to save draft",
        description: "Your article draft could not be saved locally.",
      });
    }
  }, [editor]);

  const loadDraft = useCallback(() => {
    if (!editor || typeof window === "undefined") return false;

    const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);

    if (!savedDraft) return false;

    try {
      const parsedDraft = JSON.parse(savedDraft) as DraftData;

      if (!parsedDraft.content) return false;

      editor.commands.setContent(parsedDraft.content);
      return true;
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return false;
    }
  }, [editor]);

  useEffect(() => {
    if (!editor || typeof window === "undefined") return;

    const handleBeforeUnload = () => {
      saveDraft();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [editor, saveDraft]);

  return { saveDraft, loadDraft };
};

export default useDraft;
