import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-lg font-bold text-gray-900 dark:text-gray-50"
              prefetch={false}
            >
              Student Dashboard
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Courses
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Enrolled
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Progress
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Calendar
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Notifications
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              Courses
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Introduction to Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn the fundamentals of web development, including HTML,
                  CSS, and JavaScript.
                </p>
                <Button>Enroll</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Data Structures and Algorithms
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Dive into the world of data structures and algorithms,
                  essential for problem-solving.
                </p>
                <Button>Enroll</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Introduction to Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore the fundamentals of machine learning and its
                  applications in various domains.
                </p>
                <Button>Enroll</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              Enrolled Courses
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Introduction to Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn the fundamentals of web development, including HTML,
                  CSS, and JavaScript.
                </p>
                <Button>Watch</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Data Structures and Algorithms
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Dive into the world of data structures and algorithms,
                  essential for problem-solving.
                </p>
                <Button>Watch</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              Progress
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Introduction to Web Development
                </h3>
                <div className="mb-4">
                  <Progress value={75} />
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>75% Complete</span>
                    <span>3 Modules Remaining</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Data Structures and Algorithms
                </h3>
                <div className="mb-4">
                  <Progress value={50} />
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>50% Complete</span>
                    <span>4 Modules Remaining</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              Calendar
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-4 text-center">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Sun
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Mon
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Tue
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Wed
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Thu
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Fri
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Sat
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  1
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  2
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  3
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  4
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  5
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  6
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-gray-900 dark:text-gray-50">
                  7
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              Notifications
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <BellIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                      New Assignment Due
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your &quot;Introduction to Web Development&quot;
                      assignment is due tomorrow at 11:59 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                      Upcoming Class
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your &quot;Data Structures and Algorithms&quot; class is
                      tomorrow at 9:00 AM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <InfoIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                      Announcement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The &quot;Introduction to Machine Learning&quot; course
                      has been updated with new content.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
