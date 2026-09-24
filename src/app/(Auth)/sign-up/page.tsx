"use client";

import formValidator from "@/app/(Auth)/_validators/form.validator";
import Form from "@/app/(Auth)/sign-up/_components/Form";
import ThemeTrigger from "@/components/ThemeTrigger";
import { Button, buttonVariants } from "@/components/ui/button";
import * as card from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import usePostRequest from "@/hooks/useFetcher";
import { cn } from "@/lib/utils";
import { Formik, FormikHelpers } from "formik";
import Link from "next/link";

type SignupFormValues = {
  username: string;
  cover: File | undefined;
  email: string;
  password: string;
  shouldShowPassword: boolean;
};

export const INITIAL_VALUES: SignupFormValues = {
  username: "",
  cover: undefined,
  email: "",
  password: "",
  shouldShowPassword: false,
};

const SignupPage = () => {
  const { mutate, isPending } = usePostRequest({
    url: "/auth/signup",
    failMessage: "Signup Failed !",
    successMessage: "Signed up Successfully",
  });

  const submitHandler = async (
    values: typeof INITIAL_VALUES,
    { resetForm }: FormikHelpers<typeof INITIAL_VALUES>,
  ) => {
    const { cover, username, email, password } = values;

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    if (cover instanceof File) {
      formData.append("cover", cover);
    }

    mutate(formData, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <card.Card className="w-full max-w-md">
      <card.CardHeader>
        <card.CardTitle>
          <h1>Sign up</h1>
        </card.CardTitle>
        <card.CardDescription>
          Fill below Fields to Sign up.
        </card.CardDescription>
        <card.CardAction>
          <ThemeTrigger />
        </card.CardAction>
      </card.CardHeader>
      <card.CardContent>
        <Formik
          validationSchema={formValidator}
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
          form="sign-up-form"
          disabled={isPending}
        >
          {isPending && <Spinner data-icon="inline-start" />}
          Sign up
        </Button>

        <Link
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          href="/sign-in"
        >
          Sign in Page
        </Link>
      </card.CardFooter>
    </card.Card>
  );
};

export default SignupPage;
