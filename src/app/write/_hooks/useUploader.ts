import { FormInitialValues } from "@/app/write/_components/form/Form";
import { toast } from "@/components/ui/toast";
import { ALLOWED_CONTENT_TYPES, MAX_FILE_SIZE } from "@/constants/uploader";
import { Editor } from "@tiptap/react";
import { useFormikContext } from "formik";

const useUploader = (editor?: Editor) => {
  const { setFieldValue } = useFormikContext<FormInitialValues>();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files?.[0];

    if (!file || !(file instanceof File)) {
      toast.add({
        type: "error",
        title: "Invalid image",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.add({
        type: "error",
        title: "Invalid image",
        description: "Image is too large, Max size is 1MB!",
      });
      return;
    }

    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      toast.add({
        type: "error",
        title: "Invalid image",
        description:
          "Invalid file type! Only PNG, JPG/JPEG, and WEBP are allowed.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      if (!editor) {
        setFieldValue("cover", file);
        setFieldValue("coverUrl", data.url);
      }

      if (editor) {
        editor.commands.setImage({
          src: data.url,
          alt: "Article Image",
        });
      }

      toast.add({
        type: "success",
        title: "Image uploaded successfully",
        description: "Image has been saved successfully.",
      });
    } catch {
      toast.add({
        type: "error",
        title: "Image upload failed",
        description:
          "There was an error uploading the image. Please try again.",
      });
    }
  };

  return { handleImageUpload };
};

export default useUploader;
