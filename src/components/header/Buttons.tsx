"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetRequest, usePostRequest } from "@/hooks/useFetcher";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonsProps {
  buttonsClassname?: string;
}

const Buttons = ({ buttonsClassname }: ButtonsProps) => {
  const {
    isPending: getmePending,
    isError: getmeError,
    data: getmeData,
  } = useGetRequest({
    url: "/auth/getme",
    queryKey: ["auth"],
    cacheTime: 0,
  });

  const { mutate, isPending: logoutPending } = usePostRequest({
    url: "/auth/logout",
    successMessage: "Logged out successfully",
  });

  const queryClient = useQueryClient();

  const router = useRouter();

  const logoutHandler = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          queryClient.removeQueries({
            queryKey: ["auth"],
          });

          router.replace("/");
        },
      },
    );
  };

  if (getmePending) {
    return (
      <div className="flex gap-2">
        <Skeleton className={cn("w-20")} />

        <Skeleton className={cn("w-20")} />
      </div>
    );
  }

  const isAuthenticated = !getmeError && getmeData?.response.status === 200;

  return (
    <div className="flex gap-2">
      {isAuthenticated ? (
        <>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              buttonsClassname,
            )}
          >
            Dashboard
          </Link>

          <Button
            disabled={logoutPending}
            onClick={logoutHandler}
            variant="destructive"
            size="lg"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              buttonsClassname,
            )}
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              buttonsClassname,
            )}
          >
            Sign up
          </Link>
        </>
      )}
    </div>
  );
};

export default Buttons;
