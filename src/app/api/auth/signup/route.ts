import { signupValidator } from "@/app/(Auth)/_validators/form.validator";
import connectToDB from "@/configs/db";
import { ALLOWED_CONTENT_TYPES, MAX_FILE_SIZE } from "@/constants/uploader";
import UserModel from "@/models/User";
import { hashPassword } from "@/utils/bcrypt";
import { generateToken } from "@/utils/token";
import validateRequestBody from "@/utils/validator";

import { put } from "@vercel/blob";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const BLOB_UPLOAD_PATH = "user-covers";

export const POST = async (request: Request) => {
  try {
    await connectToDB();

    const formData = await request.formData();

    const username = String(formData.get("username"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const cover = formData.get("cover");

    const requestBody = {
      username: typeof username === "string" ? username : "",
      email: typeof email === "string" ? email : "",
      password: typeof password === "string" ? password : "",
    };

    const errors = await validateRequestBody({
      schema: signupValidator,
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

    const existedUser = await UserModel.findOne({ email }).lean();

    if (existedUser) {
      return NextResponse.json(
        {
          message: "user already exists!",
        },
        { status: 409 },
      );
    }

    let coverUrl: string | undefined;

    if (cover instanceof File && cover.size > 0) {
      if (cover.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            message: "image is too large, max size is 1MB !",
          },
          { status: 400 },
        );
      }

      if (!ALLOWED_CONTENT_TYPES.includes(cover.type)) {
        return NextResponse.json(
          {
            message: "invalid file type !",
          },
          { status: 400 },
        );
      }

      const fileExtension = cover.name.split(".").pop();

      const fileName = `${randomUUID()}.${fileExtension}`;

      const blob = await put(`${BLOB_UPLOAD_PATH}/${fileName}`, cover, {
        access: "public",
        addRandomSuffix: true,
      });

      coverUrl = blob.url;
    }

    const hashedPassword = await hashPassword(password);

    await UserModel.create({
      username,
      email,
      password: hashedPassword,
      ...(coverUrl && { cover: coverUrl }),
    });

    const token = generateToken({ email });

    const cookieStore = await cookies();

    cookieStore.set("access-token", token, {
      maxAge: 24 * 60 * 60,
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json(
      {
        message: "user signed up successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("# Error in signup route =>", error);

    return NextResponse.json(
      {
        message: "internal server error!",
      },
      { status: 500 },
    );
  }
};
