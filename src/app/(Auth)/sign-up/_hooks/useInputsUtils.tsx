import { INITIAL_VALUES } from "@/app/(Auth)/sign-up/page";
import { toast } from "@/components/ui/toast";
import { ALLOWED_CONTENT_TYPES, MAX_FILE_SIZE } from "@/constants/uploader";
import { useFormikContext } from "formik";

const useInputsUtils = () => {
  const { values, errors, touched, setFieldValue } =
    useFormikContext<typeof INITIAL_VALUES>();

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

      setFieldValue("cover", file);

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

  const togglePassInputType = () => {
    setFieldValue("shouldShowPassword", (prev: boolean) => !prev);
  };

  const passInputType = values.shouldShowPassword ? "text" : "password";

  const isAriaInvalid = (value: keyof typeof INITIAL_VALUES) => {
    return Boolean(errors[value] && touched[value]);
  };

  return {
    handleImageUpload,
    togglePassInputType,
    passInputType,
    isAriaInvalid,
  };
};

export default useInputsUtils;
