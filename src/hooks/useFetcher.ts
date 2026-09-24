import { toast } from "@/components/ui/toast";
import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface UsePostRequestProps {
  url: string;
  successMessage?: string;
  failMessage?: string;
}

class RequestError extends Error {
  status: number;

  constructor(status: number) {
    super("Request failed");
    this.name = "RequestError";
    this.status = status;
  }
}

const postRequest = async (url: string, body: object) => {
  const isFormData = body instanceof FormData;

  const { response } = await fetcher({
    method: "POST",
    body: isFormData ? body : JSON.stringify(body),
    url,
  });

  if (!response.ok) {
    throw new RequestError(response.status);
  }

  return response;
};

const usePostRequest = ({
  url,
  successMessage,
  failMessage,
}: UsePostRequestProps) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: object) => {
      const requestPromise = postRequest(url, body);

      return toast.promise(requestPromise, {
        loading: "Loading...",
        success: successMessage ?? "Successful request !",
        error: (error) => {
          if (error instanceof RequestError) {
            if ([400, 422].includes(error.status)) {
              return "Invalid Datas !";
            }

            if (error.status === 401) {
              return "Unauthorized !";
            }

            if (error.status === 409) {
              return "This Datas Already Exist !";
            }

            if (error.status === 500) {
              return "Internal server error !";
            }
          }

          return failMessage ?? "Request failed !";
        },
      });
    },

    onSuccess: (response) => {
      if ([201, 200].includes(response.status)) {
        router.replace("/");
      }
    },
  });
};

export default usePostRequest;
