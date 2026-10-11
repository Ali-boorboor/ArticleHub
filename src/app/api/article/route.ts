import { formValidator } from "@/app/write/_validators/form.validator";
import connectToDB from "@/configs/db";
import ArticleModel from "@/models/Article";
import validateRequestBody from "@/utils/validator";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    await connectToDB();

    const requestBody = await request.json();

    const errors = await validateRequestBody({
      schema: formValidator,
      requestBody,
    });

    if (errors) {
      return NextResponse.json(
        {
          message: "request body is invalid !",
          errors,
        },
        { status: 422 },
      );
    }

    await ArticleModel.create(requestBody);

    return NextResponse.json(
      {
        message: "article created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("# Error in article route =>", error);

    return NextResponse.json(
      {
        message: "internal server error !",
      },
      { status: 500 },
    );
  }
};
