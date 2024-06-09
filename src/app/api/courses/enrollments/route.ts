import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { courseId, teacherId } = await req.json();
    await db.enrollments.create({
      data: {
        course: {
          connect: {
            id: courseId,
          },
        },
        teacher: {
          connect: {
            id: teacherId,
          },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      body: JSON.stringify({ message: "Enrolled successfully" }),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      body: JSON.stringify({ error: "An error occured while enrolling" }),
    });
  }
}
