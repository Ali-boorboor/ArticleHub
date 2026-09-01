"use client";

import Form from "@/app/(Auth)/sign-in/_components/Form";
import formValidator from "@/app/(Auth)/validators/form.validator";
import ThemeTrigger from "@/components/ThemeTrigger";
import { Button, buttonVariants } from "@/components/ui/button";
import * as card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Formik } from "formik";
import Link from "next/link";

export const INITIAL_VALUES = {
  username: "",
  password: "",
  shouldShowPassword: false,
};

const page = () => {
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
          onSubmit={(values) => console.log(values)}
          validationSchema={formValidator}
          initialValues={INITIAL_VALUES}
        >
          <Form />
        </Formik>
      </card.CardContent>
      <card.CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" form="sign-in-form">
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

export default page;
