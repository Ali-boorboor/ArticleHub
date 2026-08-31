import { FormInitialValues } from "@/app/write/_components/form/Form";
import useInputsUtils from "@/app/write/_hooks/useInputsUtils";
import useUploader from "@/app/write/_hooks/useUploader";
import { TITLE_MAX_LENGTH } from "@/app/write/_validators/form.validator";
import * as inputGroup from "@/components/ui/input-group";
import { ALLOWED_CONTENT_TYPES } from "@/constants/uploader";
import { ErrorMessage, Field, FieldProps } from "formik";
import * as icon from "lucide-react";

const Inputs = () => {
  const { handleImageUpload } = useUploader();
  const { values, handleTitleChange, isAriaInvalid, handleCoverRemoval } =
    useInputsUtils();

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
            <inputGroup.InputGroup className="min-w-40 bg-sidebar!">
              <inputGroup.InputGroupAddon>
                <icon.TypeOutline className="size-4" aria-hidden />
              </inputGroup.InputGroupAddon>
              <inputGroup.InputGroupInput
                {...field}
                onChange={(event) => handleTitleChange(form, event)}
                aria-invalid={isAriaInvalid("title")}
                maxLength={TITLE_MAX_LENGTH}
                placeholder="Article Title"
                className="min-w-40"
              />
            </inputGroup.InputGroup>
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
            <inputGroup.InputGroup className="min-w-40 bg-sidebar!">
              <inputGroup.InputGroupAddon>
                <icon.Link2 className="size-4" aria-hidden />
              </inputGroup.InputGroupAddon>
              <inputGroup.InputGroupInput
                aria-invalid={isAriaInvalid("slug")}
                placeholder="Article Slug"
                className="min-w-40"
                {...field}
                readOnly
              />
            </inputGroup.InputGroup>
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

          <inputGroup.InputGroup className="min-w-40 bg-sidebar!">
            <inputGroup.InputGroupAddon>
              <icon.ImageIcon className="size-4" aria-hidden />
            </inputGroup.InputGroupAddon>
            <inputGroup.InputGroupInput
              aria-invalid={isAriaInvalid("coverUrl")}
              accept={ALLOWED_CONTENT_TYPES.join(",")}
              onChange={handleImageUpload}
              title="Article Cover"
              className="min-w-40"
              type="file"
            />
          </inputGroup.InputGroup>
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
              <inputGroup.InputGroup className="min-w-40 bg-sidebar!">
                <inputGroup.InputGroupAddon>
                  <icon.Link className="size-4" aria-hidden />
                </inputGroup.InputGroupAddon>
                <inputGroup.InputGroupInput
                  aria-invalid={isAriaInvalid("coverUrl")}
                  title="Article Cover URL"
                  className="min-w-40"
                  {...field}
                />
                <inputGroup.InputGroupAddon
                  align="inline-end"
                  title="Remove Cover"
                >
                  <inputGroup.InputGroupButton
                    onClick={handleCoverRemoval}
                    variant="destructive"
                    size="icon-sm"
                  >
                    <icon.Trash aria-hidden />
                  </inputGroup.InputGroupButton>
                </inputGroup.InputGroupAddon>
              </inputGroup.InputGroup>
            )}
          </Field>
        </div>
      )}
    </div>
  );
};

export default Inputs;
