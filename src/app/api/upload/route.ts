import { ALLOWED_CONTENT_TYPES, MAX_FILE_SIZE } from "@/constants/uploader";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const BLOB_UPLOAD_PATH = "article-images";

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
        { message: `Image is too large, Max size is 1MB!` },
        { status: 400 },
      );
    }

    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      return Response.json({ message: `Invalid file type!` }, { status: 400 });
    }

    const blob = await put(`${BLOB_UPLOAD_PATH}/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ message: "Upload successful", url: blob.url });
  } catch (error) {
    console.error("Upload failed:", error);

    return NextResponse.json(
      { error: "Upload failed. Please try again." },
      { status: 500 },
    );
  }
}
