import Editor from "@/app/write/_components/editor/Editor";
import Buttons from "@/app/write/_components/form/Buttons";
import Inputs from "@/app/write/_components/form/Inputs";
import useDraft from "@/app/write/_hooks/useDraft";
import useEditor from "@/app/write/_hooks/useEditor";
import { Form as FormikForm } from "formik";
import { useEffect } from "react";

const FormContent = () => {
  const editor = useEditor();
  const { loadDraft } = useDraft(editor);

  useEffect(() => {
    if (!editor) return;

    loadDraft();
  }, [editor, loadDraft]);

  if (!editor) return null;

  return (
    <FormikForm className="grid gap-2 min-w-0">
      <Inputs />

      <Editor editor={editor} />

      <Buttons editor={editor} />
    </FormikForm>
  );
};

export default FormContent;
