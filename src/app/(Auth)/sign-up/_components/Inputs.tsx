import useInputsUtils from "@/app/(Auth)/sign-up/_hooks/useInputsUtils";
import { USERNAME_MAX_LENGTH } from "@/app/(Auth)/validators/form.validator";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import * as inputGroup from "@/components/ui/input-group";
import { ALLOWED_CONTENT_TYPES } from "@/constants/uploader";
import { ErrorMessage, FieldProps, Field as FormikField } from "formik";
import { Eye, EyeOffIcon, ImageIcon, Mail, User } from "lucide-react";

const Inputs = () => {
  const {
    handleImageUpload,
    passInputType,
    togglePassInputType,
    isAriaInvalid,
  } = useInputsUtils();

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

      <Field>
        <FieldLabel htmlFor="cover">Cover</FieldLabel>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            accept={ALLOWED_CONTENT_TYPES.join(",")}
            onChange={handleImageUpload}
            type="file"
            id="cover"
          />
          <inputGroup.InputGroupAddon align="inline-end" aria-hidden>
            <ImageIcon />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </Field>

      <FormikField name="email">
        {({ field }: FieldProps) => (
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <inputGroup.InputGroup>
              <inputGroup.InputGroupInput
                aria-invalid={isAriaInvalid("email")}
                placeholder="Enter email"
                id="email"
                {...field}
              />
              <inputGroup.InputGroupAddon align="inline-end" aria-hidden>
                <Mail />
              </inputGroup.InputGroupAddon>
            </inputGroup.InputGroup>
            <ErrorMessage component={FieldError} name="email" />
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
