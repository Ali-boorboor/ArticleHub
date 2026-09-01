import { INITIAL_VALUES } from "@/app/(Auth)/sign-in/page";
import { useFormikContext } from "formik";

const useInputsUtils = () => {
  const { values, errors, touched, setFieldValue } =
    useFormikContext<typeof INITIAL_VALUES>();

  const togglePassInputType = () => {
    setFieldValue("shouldShowPassword", (prev: boolean) => !prev);
  };

  const passInputType = values.shouldShowPassword ? "text" : "password";

  const isAriaInvalid = (value: keyof typeof INITIAL_VALUES) => {
    return Boolean(errors[value] && touched[value]);
  };

  return {
    togglePassInputType,
    passInputType,
    isAriaInvalid,
  };
};

export default useInputsUtils;
