import * as Yup from "yup";

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{3,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 8;

const formValidator = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(
      USERNAME_MIN_LENGTH,
      `Username must be at least ${USERNAME_MIN_LENGTH} characters long`,
    )
    .max(
      USERNAME_MAX_LENGTH,
      `Username can contain at most ${USERNAME_MAX_LENGTH} characters`,
    )
    .required("Username is required")
    .matches(
      USERNAME_REGEX,
      "Username contains letters, numbers, underscores, or hyphens only",
    ),

  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required")
    .matches(EMAIL_REGEX, "Email is invalid"),

  password: Yup.string()
    .trim()
    .min(
      PASSWORD_MIN_LENGTH,
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
    )
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password contains at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export default formValidator;
