import Tools from "@/app/write/_components/editor/Tools";
import { FormInitialValues } from "@/app/write/_components/form/Form";
import { EditorContent, type Editor as EditorType } from "@tiptap/react";
import { useFormikContext } from "formik";
import { useEffect } from "react";

interface EditorProps {
  editor: EditorType;
}

const Editor = ({ editor }: EditorProps) => {
  const { setFieldValue, setFieldTouched, touched, errors } =
    useFormikContext<FormInitialValues>();

  useEffect(() => {
    const handleUpdate = () => {
      setFieldValue("content", editor.getJSON());
    };

    const handleBlur = () => {
      setFieldTouched("content", true, true);
    };

    editor.on("update", handleUpdate);
    editor.on("blur", handleBlur);

    return () => {
      editor.off("update", handleUpdate);
      editor.off("blur", handleBlur);
    };
  }, [editor, setFieldValue, setFieldTouched]);

  return (
    <>
      <Tools editor={editor} />

      {touched.content && errors.content && (
        <span className="text-sm text-destructive">{errors.content}</span>
      )}

      <EditorContent
        aria-invalid={Boolean(errors.content && touched.content)}
        className="min-w-0 w-full max-w-full group"
        editor={editor}
      />
    </>
  );
};

export default Editor;
