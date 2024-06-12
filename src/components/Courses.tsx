import { Card, CardContent } from "@/components/ui/card";
import { CoursesForm } from "./form/create-courses-form";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function CoursesDashboard() {
  const user = await getCurrentUser(); //This part is pretty simple
  if (!user) {
    redirect("/");
  }
  const courses = await db.courses.findMany({
    where: {
      teacherId: user.id,
    },
  });
  // console.log(courses);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-600 dark:bg-transparent p-8">
        <section className="bg-gray-500 rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Course</h2>
          <CoursesForm />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses &&
              courses.map((course) => (
                <Link
                  key={course.id}
                  href={`${process.env.NEXT_PUBLIC_URL!}/teachers/${course.id}`}
                >
                  <Card className="p-3">
                    <CardContent>
                      <h3 className="text-xl font-bold mb-2" key={course.id}>
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4" key={course.id}>
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between space-x-1">
                        <span className="text-gray-500" key={course.id}>
                          Start: {course.startDate.toISOString().split("T")[0]}
                        </span>
                        &nbsp;
                        <span className="text-gray-500" key={course.id}>
                          End: {course.endDate.toISOString().split("T")[0]}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
