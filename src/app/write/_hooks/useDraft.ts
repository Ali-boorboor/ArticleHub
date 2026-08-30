import { FormInitialValues } from "@/app/write/_components/form/Form";
import { toast } from "@/components/ui/toast";
import { useFormikContext } from "formik";
import { useCallback, useEffect } from "react";

export interface DraftData extends FormInitialValues {
  savedAt: string;
}

const DRAFT_STORAGE_KEY = "article-hub-write-draft";

const useDraft = () => {
  const { values, setValues } = useFormikContext<FormInitialValues>();

  const saveDraft = useCallback(
    (showToast = true) => {
      if (typeof window === "undefined") return;

      const draft: DraftData = {
        title: values.title,
        slug: values.slug,
        cover: values.cover,
        content: values.content,
        savedAt: new Date().toISOString(),
      };

      try {
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));

        if (showToast) {
          toast.add({
            type: "success",
            title: "Draft saved",
            description: "Your article draft has been saved locally.",
          });
        }
      } catch {
        toast.add({
          type: "error",
          title: "Failed to save draft",
          description: "Your article draft could not be saved locally.",
        });
      }
    },
    [values.title, values.slug, values.cover, values.content],
  );

  const loadDraft = useCallback(() => {
    if (typeof window === "undefined") return false;

    const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);

    if (!savedDraft) return false;

    try {
      const parsedDraft = JSON.parse(savedDraft) as DraftData;

      if (!parsedDraft.content) return false;

      setValues({
        title: parsedDraft.title,
        slug: parsedDraft.slug,
        cover: parsedDraft.cover,
        content: parsedDraft.content,
      });
      return true;
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return false;
    }
  }, [setValues]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleBeforeUnload = () => {
      saveDraft(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [saveDraft]);

  return { saveDraft, loadDraft };
};

export default useDraft;
