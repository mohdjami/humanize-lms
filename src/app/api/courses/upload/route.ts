import { db } from "@/lib/db";
import { Type } from "@prisma/client";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const courseId = formData.get("courseId") as string;
    const file = formData.get("file");
    const blob = await put(`lms/${filename!}`, file!, {
      access: "public",
    });
    console.log(blob);
    //create course material under a created course first check id the course exists
    const courseExists = await db.courses.findUnique({
      where: {
        id: courseId,
      },
    });
    if (!courseExists) {
      return NextResponse.json({
        status: 401,
        body: JSON.stringify({ error: "Course does not exist" }),
      });
    }
    const courseMaterial = await db.course_Material.create({
      data: {
        title,
        type: [type as Type],
        course: {
          connect: {
            id: courseId,
          },
        },
        url: blob.url,
      },
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      body: JSON.stringify({
        error: "An error occured while uploading course material",
      }),
    });
  }
}
