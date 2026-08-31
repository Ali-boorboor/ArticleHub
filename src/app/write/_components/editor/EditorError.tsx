import { FormInitialValues } from "@/app/write/_components/form/Form";
import { useFormikContext } from "formik";

const EditorError = () => {
  const { touched, errors } = useFormikContext<FormInitialValues>();

  if (!touched.content || !errors.content) return null;

  return <span className="text-sm text-destructive">{errors.content}</span>;
};

export default EditorError;
