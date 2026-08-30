"use client";

import FormContent from "@/app/write/_components/form/FormContent";
import formValidator from "@/app/write/_validators/form.validator";
import { type JSONContent } from "@tiptap/react";
import { Formik } from "formik";

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
  return (
    <Formik
      validationSchema={formValidator}
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormContent />
    </Formik>
  );
};

export default Form;
