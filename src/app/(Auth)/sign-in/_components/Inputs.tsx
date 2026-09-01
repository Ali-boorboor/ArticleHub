import useInputsUtils from "@/app/(Auth)/sign-in/_hooks/useInputsUtils";
import { USERNAME_MAX_LENGTH } from "@/app/(Auth)/validators/form.validator";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import * as inputGroup from "@/components/ui/input-group";
import { ErrorMessage, FieldProps, Field as FormikField } from "formik";
import { Eye, EyeOffIcon, User } from "lucide-react";

const Inputs = () => {
  const { passInputType, togglePassInputType, isAriaInvalid } =
    useInputsUtils();

  return (
    <>
      <FormikField name="username">
        {({ field }: FieldProps) => (
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <inputGroup.InputGroup>
              <inputGroup.InputGroupInput
                aria-invalid={isAriaInvalid("username")}
                maxLength={USERNAME_MAX_LENGTH}
                placeholder="Enter username"
                id="username"
                {...field}
              />
              <inputGroup.InputGroupAddon align="inline-end" aria-hidden>
                <User />
              </inputGroup.InputGroupAddon>
            </inputGroup.InputGroup>
            <ErrorMessage component={FieldError} name="username" />
          </Field>
        )}
      </FormikField>

      <FormikField name="password">
        {({ field }: FieldProps) => (
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <inputGroup.InputGroup>
              <inputGroup.InputGroupInput
                aria-invalid={isAriaInvalid("password")}
                placeholder="Enter password"
                type={passInputType}
                id="password"
                {...field}
              />
              <inputGroup.InputGroupAddon align="inline-end" aria-hidden>
                <inputGroup.InputGroupButton
                  onClick={togglePassInputType}
                  type="button"
                >
                  {passInputType === "password" ? <Eye /> : <EyeOffIcon />}
                </inputGroup.InputGroupButton>
              </inputGroup.InputGroupAddon>
            </inputGroup.InputGroup>
            <ErrorMessage component={FieldError} name="password" />
          </Field>
        )}
      </FormikField>
    </>
  );
};

export default Inputs;
