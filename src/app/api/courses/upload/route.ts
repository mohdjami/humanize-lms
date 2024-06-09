import { db } from "@/lib/db";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");

    const blob = await put(`lms/${filename!}`, request.body!, {
      access: "public",
    });

    console.log(blob);
    const { title, courseId } = await request.json();
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
        course: {
          connect: {
            id: courseId,
          },
        },
        url: blob.url,
      },
    });

    return NextResponse.json(courseMaterial);
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
