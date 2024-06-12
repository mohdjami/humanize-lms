import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { title, description, teacher, startDate, endDate } =
      await req.json();
    console.log(title, description, teacher, startDate, endDate);
    //check if the same course in the teachers id already exists
    const teacherExists = await db.user.findUnique({
      where: {
        email: teacher,
      },
    });
    if (!teacherExists) {
      return NextResponse.json({
        status: 401,
        body: JSON.stringify({ error: "Teacher does not exist" }),
      });
    }
    const courseExists = await db.courses.findFirst({
      where: {
        title,
        teacherId: teacherExists?.id,
      },
    });
    if (courseExists) {
      return NextResponse.json({
        status: 401,
        body: JSON.stringify({ error: "Course already exists." }),
      });
    }
    const course = await db.courses.create({
      data: {
        title,
        description,
        teacher: {
          connect: {
            id: teacherExists?.id,
          },
        },
        startDate,
        endDate,
      },
    });

    return NextResponse.json({
      status: 200,
      body: JSON.stringify(course),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      body: JSON.stringify({ error: "An error occured while creating course" }),
    });
  }
}
