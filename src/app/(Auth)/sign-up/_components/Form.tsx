import Inputs from "@/app/(Auth)/sign-up/_components/Inputs";
import { Form as FormikForm } from "formik";

const Form = () => {
  return (
    <FormikForm className="flex flex-col gap-6" id="sign-up-form">
      <Inputs />
    </FormikForm>
  );
};

export default Form;
