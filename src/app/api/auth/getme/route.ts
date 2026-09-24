import { validateToken } from "@/utils/token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const token = (await cookies()).get("access-token")?.value as string;

    const tokenDatas = validateToken(token);

    if (tokenDatas) {
      return NextResponse.json({ message: "user is logged in", tokenDatas });
    }
  } catch {
    return NextResponse.json(
      { message: "user is not login!" },
      { status: 401 },
    );
  }
};
