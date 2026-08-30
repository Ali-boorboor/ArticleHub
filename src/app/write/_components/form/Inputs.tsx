import { FormInitialValues } from "@/app/write/_components/form/Form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { toast } from "@/components/ui/toast";
import { Field, FieldProps, FormikProps } from "formik";
import { FileText, Image as ImageIcon, Link2 } from "lucide-react";

const Inputs = () => {
  const handleCoverUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    form: FormikProps<FormInitialValues>,
  ) => {
    const file = event.currentTarget.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/uploads", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      form.setFieldValue("cover", data.url);

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

  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <Field name="title">
        {({ field }: FieldProps) => (
          <InputGroup className="min-w-40 bg-sidebar!">
            <InputGroupAddon>
              <FileText className="size-4" aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Article Title"
              className="min-w-40"
              {...field}
            />
          </InputGroup>
        )}
      </Field>

      <Field name="slug">
        {({ field }: FieldProps) => (
          <InputGroup className="min-w-40 bg-sidebar!">
            <InputGroupAddon>
              <Link2 className="size-4" aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Article Slug"
              className="min-w-40"
              {...field}
            />
          </InputGroup>
        )}
      </Field>

      <Field name="cover">
        {({ form }: FieldProps<FormInitialValues>) => (
          <InputGroup className="min-w-40 bg-sidebar!">
            <InputGroupAddon>
              <ImageIcon className="size-4" aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              onChange={(event) => handleCoverUpload(event, form)}
              accept="image/png, image/jpg, image/jpeg, image/webp"
              title="Article Cover"
              className="min-w-40"
              type="file"
            />
          </InputGroup>
        )}
      </Field>
    </div>
  );
};

export default Inputs;
