"use client";

import { signinValidator } from "@/app/(Auth)/_validators/form.validator";
import Form from "@/app/(Auth)/sign-in/_components/Form";
import ThemeTrigger from "@/components/ThemeTrigger";
import { Button, buttonVariants } from "@/components/ui/button";
import * as card from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import usePostRequest from "@/hooks/useFetcher";
import { cn } from "@/lib/utils";
import { Formik, FormikHelpers } from "formik";
import Link from "next/link";

export const INITIAL_VALUES = {
  email: "",
  password: "",
  shouldShowPassword: false,
};

const SigninPage = () => {
  const { mutate, isPending } = usePostRequest({
    url: "/auth/login",
    failMessage: "Login Failed !",
    successMessage: "Logged in Successfully",
  });

  const submitHandler = async (
    values: typeof INITIAL_VALUES,
    { resetForm }: FormikHelpers<typeof INITIAL_VALUES>,
  ) => {
    const { email, password } = values;

    mutate(
      { email, password },
      {
        onSuccess: () => resetForm(),
      },
    );
  };

  return (
    <card.Card className="w-full max-w-md">
      <card.CardHeader>
        <card.CardTitle>
          <h1>Sign in</h1>
        </card.CardTitle>
        <card.CardDescription>
          Fill below Fields to Sign in.
        </card.CardDescription>
        <card.CardAction>
          <ThemeTrigger />
        </card.CardAction>
      </card.CardHeader>
      <card.CardContent>
        <Formik
          validationSchema={signinValidator}
          initialValues={INITIAL_VALUES}
          onSubmit={submitHandler}
        >
          <Form />
        </Formik>
      </card.CardContent>
      <card.CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full"
          form="sign-in-form"
          disabled={isPending}
        >
          {isPending && <Spinner data-icon="inline-start" />}
          Sign in
        </Button>

        <Link
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          href="/sign-up"
        >
          Sign up Page
        </Link>
      </card.CardFooter>
    </card.Card>
  );
};

export default SigninPage;
