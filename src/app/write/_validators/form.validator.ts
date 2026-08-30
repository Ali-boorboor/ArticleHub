import { JSONContent } from "@tiptap/react";
import * as Yup from "yup";

const TITLE_REGEX = /^[\p{L}\p{N}\p{P}\p{Zs}]+$/u;
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const hasTextContent = (node?: JSONContent): boolean => {
  if (!node) return false;

  if (node.text?.trim()) {
    return true;
  }

  return node.content?.some(hasTextContent) ?? false;
};

const formValidator = Yup.object().shape({
  title: Yup.string()
    .trim()
    .max(60, "Title can contain at most 60 characters")
    .required("Title is required")
    .matches(TITLE_REGEX, "Title contains invalid characters"),

  slug: Yup.string()
    .trim()
    .required("Slug is required")
    .matches(
      SLUG_REGEX,
      "Slug can only contain lowercase letters, numbers, and single hyphens",
    ),

  coverUrl: Yup.string()
    .trim()
    .url("Invalid cover URL")
    .required("Cover is required"),

  content: Yup.mixed<JSONContent>().test(
    "has-content",
    "Content is required",
    (content) => hasTextContent(content),
  ),
});

export default formValidator;
