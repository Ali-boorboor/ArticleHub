import { FormInitialValues } from "@/app/write/_components/form/Form";
import { FormikProps, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import { slugify } from "transliteration";

const useInputsUtils = () => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<FormInitialValues>();

  const createSlug = (title: string) => {
    return slugify(title, { lowercase: true, separator: "-", trim: true });
  };

  const handleTitleChange = (
    form: FormikProps<FormInitialValues>,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const title = event.target.value;

    form.setFieldValue("title", title);
    form.setFieldValue("slug", createSlug(title));
  };

  const handleCoverRemoval = () => {
    setFieldValue("coverUrl", undefined);
  };

  const isAriaInvalid = (value: keyof FormInitialValues) => {
    return Boolean(errors[value] && touched[value]);
  };

  return {
    values,
    createSlug,
    handleTitleChange,
    handleCoverRemoval,
    isAriaInvalid,
  };
};

export default useInputsUtils;
