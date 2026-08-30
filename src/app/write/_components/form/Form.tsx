"use client";

import FormContent from "@/app/write/_components/form/FormContent";
import { type JSONContent } from "@tiptap/react";
import { Formik } from "formik";

export interface FormInitialValues {
  title: string;
  slug: string;
  cover?: string;
  content?: JSONContent;
}

const initialValues: FormInitialValues = {
  title: "",
  slug: "",
  cover: undefined,
  content: undefined,
};

const Form = () => {
  return (
    <Formik
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
