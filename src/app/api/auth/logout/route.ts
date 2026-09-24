import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("access-token");

    return NextResponse.json(
      {
        message: "logged out successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("# Error in logout route =>", error);

    return NextResponse.json(
      { message: "internal server error !" },
      { status: 500 },
    );
  }
};
