import { toast } from "@/components/ui/toast";
import fetcher from "@/utils/fetcher";
import { type QueryKey, useMutation, useQuery } from "@tanstack/react-query";

interface BaseProps {
  url: string;
  successMessage?: string;
  failMessage?: string;
}

interface GetRequestProps extends Pick<BaseProps, "url" | "failMessage"> {
  queryKey: QueryKey;
  cacheTime?: number;
  retryFetchOnError?: boolean;
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

export const usePostRequest = ({
  url,
  successMessage,
  failMessage,
}: BaseProps) => {
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

            if (error.status === 404) {
              return "Not Found !";
            }

            if (error.status === 409) {
              return "This Datas Already Exist !";
            }

            if (error.status === 500) {
              return "Internal server error !";
            }
          }

          return failMessage ?? "Internal server error !";
        },
      });
    },
  });
};

const getRequest = async <T>(url: string) => {
  const { response, data } = await fetcher<T>({ method: "GET", url });

  if (!response.ok) {
    throw new RequestError(response.status);
  }

  return { response, data };
};

export const useGetRequest = <T = unknown>({
  url,
  queryKey,
  cacheTime = 0,
  retryFetchOnError = false,
}: GetRequestProps) => {
  return useQuery<{ response: Response; data: T }, RequestError>({
    queryKey,

    queryFn: () => getRequest<T>(url),

    retry: retryFetchOnError,

    staleTime: cacheTime,

    gcTime: cacheTime,
  });
};
