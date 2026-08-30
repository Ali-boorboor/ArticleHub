import { FormInitialValues } from "@/app/write/_components/form/Form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { toast } from "@/components/ui/toast";
import { ErrorMessage, Field, FieldProps, useFormikContext } from "formik";
import {
  Image as ImageIcon,
  Link,
  Link2,
  Trash,
  TypeOutline,
} from "lucide-react";
import { slugify } from "transliteration";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

const Inputs = () => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<FormInitialValues>();

  const handleCoverUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files?.[0];

    if (!file || !(file instanceof File)) {
      toast.add({
        type: "error",
        title: "Invalid cover image",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.add({
        type: "error",
        title: "Invalid cover image",
        description: "Image is too large, Max size is 1MB!",
      });
      return;
    }

    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      toast.add({
        type: "error",
        title: "Invalid cover image",
        description:
          "Invalid file type! Only PNG, JPG/JPEG, and WEBP are allowed.",
      });
      return;
    }

    setFieldValue("cover", file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setFieldValue("coverUrl", data.url);

      toast.add({
        type: "success",
        title: "Cover uploaded successfully",
        description: "Cover has been saved successfully.",
      });
    } catch {
      toast.add({
        type: "error",
        title: "Cover upload failed",
        description:
          "There was an error uploading the cover image. Please try again.",
      });
    }
  };

  const createSlug = (title: string) => {
    return slugify(title, { lowercase: true, separator: "-", trim: true });
  };

  return (
    <div className="flex items-end gap-2 flex-col sm:flex-row">
      <div className="grid gap-1 w-full">
        <ErrorMessage
          className="text-destructive text-sm"
          component="span"
          name="title"
        />

        <Field name="title">
          {({ form, field }: FieldProps<string, FormInitialValues>) => (
            <InputGroup className="min-w-40 bg-sidebar!">
              <InputGroupAddon>
                <TypeOutline className="size-4" aria-hidden />
              </InputGroupAddon>
              <InputGroupInput
                {...field}
                aria-invalid={Boolean(errors.title && touched.title)}
                placeholder="Article Title"
                className="min-w-40"
                onChange={(event) => {
                  const title = event.target.value;

                  form.setFieldValue("title", title);
                  form.setFieldValue("slug", createSlug(title));
                }}
              />
            </InputGroup>
          )}
        </Field>
      </div>

      <div className="grid gap-1 w-full">
        <ErrorMessage
          className="text-destructive text-sm"
          component="span"
          name="slug"
        />

        <Field name="slug">
          {({ field }: FieldProps<string, FormInitialValues>) => (
            <InputGroup className="min-w-40 bg-sidebar!">
              <InputGroupAddon>
                <Link2 className="size-4" aria-hidden />
              </InputGroupAddon>
              <InputGroupInput
                aria-invalid={Boolean(errors.slug && touched.slug)}
                placeholder="Article Slug"
                className="min-w-40"
                {...field}
                readOnly
              />
            </InputGroup>
          )}
        </Field>
      </div>

      {!values.coverUrl ? (
        <div className="grid gap-1 w-full">
          <ErrorMessage
            className="text-destructive text-sm"
            component="span"
            name="coverUrl"
          />

          <InputGroup className="min-w-40 bg-sidebar!">
            <InputGroupAddon>
              <ImageIcon className="size-4" aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              aria-invalid={Boolean(errors.coverUrl && touched.coverUrl)}
              accept="image/png, image/jpg, image/jpeg, image/webp"
              onChange={(event) => handleCoverUpload(event)}
              title="Article Cover"
              className="min-w-40"
              type="file"
            />
          </InputGroup>
        </div>
      ) : (
        <div className="grid gap-1 w-full">
          <ErrorMessage
            className="text-destructive text-sm"
            component="span"
            name="coverUrl"
          />

          <Field name="coverUrl">
            {({ field }: FieldProps<string, FormInitialValues>) => (
              <InputGroup className="min-w-40 bg-sidebar!">
                <InputGroupAddon>
                  <Link className="size-4" aria-hidden />
                </InputGroupAddon>
                <InputGroupInput
                  aria-invalid={Boolean(errors.coverUrl && touched.coverUrl)}
                  title="Article Cover URL"
                  className="min-w-40"
                  {...field}
                />
                <InputGroupAddon align="inline-end" title="Remove Cover">
                  <InputGroupButton
                    onClick={() => setFieldValue("coverUrl", undefined)}
                    variant="destructive"
                    size="icon-sm"
                  >
                    <Trash />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            )}
          </Field>
        </div>
      )}
    </div>
  );
};

export default Inputs;
