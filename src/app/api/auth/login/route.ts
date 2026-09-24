import { signinValidator } from "@/app/(Auth)/_validators/form.validator";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { comparePassword } from "@/utils/bcrypt";
import { generateToken } from "@/utils/token";
import validateRequestBody from "@/utils/validator";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    await connectToDB();

    const requestBody = await request.json();
    const { email, password } = requestBody;

    const errors = await validateRequestBody({
      schema: signinValidator,
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

    const existedUser = await UserModel.findOne({ email });

    if (!existedUser) {
      return NextResponse.json(
        { message: "user not found !" },
        { status: 404 },
      );
    }

    const isPasswordTrue = await comparePassword(
      password,
      existedUser.password,
    );

    if (!isPasswordTrue) {
      return Response.json(
        { message: "password/email is wrong !" },
        { status: 401 },
      );
    }

    const token = generateToken({ email });

    const cookieStore = await cookies();
    cookieStore.set("access-token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      path: "/",
    });

    return Response.json({ message: "user logged in successfully" });
  } catch (error) {
    console.error("# Error in login route =>", error);

    return NextResponse.json(
      {
        message: "internal server error !",
      },
      { status: 500 },
    );
  }
};
