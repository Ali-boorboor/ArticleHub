import Inputs from "@/app/(Auth)/sign-in/_components/Inputs";
import { Form as FormikForm } from "formik";

const Form = () => {
  return (
    <FormikForm className="flex flex-col gap-6" id="sign-in-form">
      <Inputs />
    </FormikForm>
  );
};

export default Form;
