"use client";

import FormContent from "@/app/write/_components/form/FormContent";
import { formValidator } from "@/app/write/_validators/form.validator";
import { usePostRequest } from "@/hooks/useFetcher";
import { type JSONContent } from "@tiptap/react";
import { Formik, FormikHelpers } from "formik";

export interface FormInitialValues {
  title: string;
  slug: string;
  cover?: File;
  coverUrl?: string;
  content?: JSONContent;
}

const initialValues: FormInitialValues = {
  title: "",
  slug: "",
  cover: undefined,
  coverUrl: "",
  content: undefined,
};

const Form = () => {
  const { mutate, isPending } = usePostRequest({
    url: "/article",
    failMessage: "Failed In Adding Article !",
    successMessage: "Article Added Successfully",
  });

  const submitHandler = async (
    values: FormInitialValues,
    { resetForm }: FormikHelpers<FormInitialValues>,
  ) => {
    const { title, slug, content, coverUrl } = values;

    mutate(
      {
        title,
        slug,
        coverUrl,
        content,
      },
      {
        onSuccess: () => {
          resetForm();
        },
      },
    );
  };

  return (
    <Formik
      validationSchema={formValidator}
      initialValues={initialValues}
      onSubmit={submitHandler}
    >
      <FormContent isPending={isPending} />
    </Formik>
  );
};

export default Form;
