import { db } from "@/lib/db";

export async function POST(req: Response) {
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
    return {
      status: 200,
      body: JSON.stringify({ message: "Enrolled successfully" }),
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: JSON.stringify({ error: "An error occured while enrolling" }),
    };
  }
}
