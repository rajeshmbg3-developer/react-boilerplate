import { EMAIL_REGEX } from "src/utils/constants";
import * as yup from "yup";

export const emilValidation = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .min(5, "Minimum 5 characters required")
    .max(64, "Maximum 64 characters exceeded")
    .email("Email is invalid")
    .matches(EMAIL_REGEX, "Email is invalid"),
});

export const passwordValidation = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Minimum 5 characters required")
    .max(64, "Maximum 64 characters exceeded"),
});

export const loginformValidation = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .min(5, "Minimum 5 characters required")
    .max(64, "Maximum 64 characters exceeded")
    .email("Email is invalid")
    .matches(EMAIL_REGEX, "Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Minimum 5 characters required")
    .max(64, "Maximum 64 characters exceeded"),
});
