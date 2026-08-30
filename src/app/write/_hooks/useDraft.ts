import { FormInitialValues } from "@/app/write/_components/form/Form";
import { toast } from "@/components/ui/toast";
import { Editor } from "@tiptap/react";
import { useFormikContext } from "formik";
import { useCallback, useEffect } from "react";

const DRAFT_STORAGE_KEY = "article-hub-write-draft";

const useDraft = (editor: Editor | null) => {
  const { values, setValues, resetForm } =
    useFormikContext<FormInitialValues>();

  const saveDraft = useCallback(
    (showToast = true) => {
      if (typeof window === "undefined") return;

      const draft: FormInitialValues = {
        title: values.title,
        slug: values.slug,
        coverUrl: values.coverUrl,
        content: values.content,
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
    [values.title, values.slug, values.content, values.coverUrl],
  );

  const loadDraft = useCallback(() => {
    if (typeof window === "undefined") return false;

    const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);

    if (!savedDraft) return false;

    try {
      const parsedDraft = JSON.parse(savedDraft) as FormInitialValues;

      if (!parsedDraft.content) return false;

      setValues({
        title: parsedDraft.title,
        slug: parsedDraft.slug,
        coverUrl: parsedDraft.coverUrl,
        content: parsedDraft.content,
      });

      editor?.commands.setContent(parsedDraft.content);

      return true;
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return false;
    }
  }, [setValues, editor]);

  const deleteDraft = useCallback(() => {
    if (typeof window === "undefined") return false;

    window.localStorage.removeItem(DRAFT_STORAGE_KEY);

    try {
      editor?.commands.clearContent();

      resetForm();

      return true;
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return false;
    }
  }, [resetForm, editor]);

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

  return { saveDraft, loadDraft, deleteDraft };
};

export default useDraft;
