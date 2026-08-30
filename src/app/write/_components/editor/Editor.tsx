import Tools from "@/app/write/_components/editor/Tools";
import { EditorContent, type Editor as EditorType } from "@tiptap/react";
import { Field, FieldProps } from "formik";

interface EditorProps {
  editor: EditorType;
}

const Editor = ({ editor }: EditorProps) => {
  return (
    <>
      <Tools editor={editor} />

      <Field name="content">
        {({ field }: FieldProps) => (
          <EditorContent
            className="min-w-0 w-full max-w-full"
            editor={editor}
            {...field}
          />
        )}
      </Field>
    </>
  );
};

export default Editor;
