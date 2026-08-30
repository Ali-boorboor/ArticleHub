import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { message: "No file provided." },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { message: `Image is too large, Max size is 4MB!` },
        { status: 400 },
      );
    }

    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      return Response.json({ message: `Invalid file type!` }, { status: 400 });
    }

    const blob = await put(`article-images/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ message: "Upload successful", url: blob.url });
  } catch (error) {
    console.error("Upload failed:", error);

    return NextResponse.json(
      { error: "Upload failed. Please try again." },
      { status: 400 },
    );
  }
}
