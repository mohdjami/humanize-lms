import UploadContentForm from "@/components/form/upload-content-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { Upload } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    Id: string;
  };
};
export const dynamic = "force-dynamic";

const UploadContent = async ({ params }: Props) => {
  console.log("hello");
  console.log(params.Id);
  const course = await db.courses.findUnique({
    where: {
      id: params.Id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      course_material: true,
    },
  });
  console.log("Course material", course?.course_material);
  return (
    <div className="container grid ">
      <Card className="flex flex-grow w-full h-full m-4 p-4">
        {course?.id && <UploadContentForm id={course?.id} />}
      </Card>
      <div className="flex flex-grow p-4 mt-2 w-full h-full">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle key={course?.id}>{course?.title}</CardTitle>
            <CardDescription key={course?.id}>
              {course?.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <h3 className="text-lg font-semibold">Documents</h3>
            {course?.course_material
              .filter((material) => material.type[0] === "pdf")
              .map((material) => (
                <div className="grid gap-2" key={material.id}>
                  <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <VideoIcon className="w-5 h-5" />
                      <div>
                        <h4
                          className="font-medium text-gray-900 dark:text-gray-50"
                          key={material.id}
                        >
                          {material.title}
                        </h4>
                        <p key={material.id}>
                          Description: {material.description}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-center gap-2" key={material.id}>
                      {material?.type[0] === "pdf" ? (
                        <BookIcon className="w-5 h-5" />
                      ) : (
                        <VideoIcon className="w-5 h-5" />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-50">
                          Material Link
                        </h4>
                        <Link key={material.id} href={material.url}>
                          {material.url}
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            <h3 className="text-lg font-semibold">Text Material</h3>

            {course?.course_material.length !== 0 &&
              course?.course_material
                .filter((material) => material.type[0] === "text")
                .map((material) => (
                  <div className="grid gap-2" key={material.id}>
                    <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                        <div>
                          <h4
                            className="font-medium text-gray-900 dark:text-gray-50"
                            key={material.id}
                          >
                            {material.title}
                          </h4>
                          <p key={material.id}>
                            Description: {material.description}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-50">
                            CSS Basics
                          </h4>
                          <p>
                            Learn how to style your web pages with Cascading
                            Style Sheets.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-50">
                            Material Link
                          </h4>
                          <Link key={material.id} href={material.url}>
                            {material.url}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
            <h3 className="text-lg font-semibold">Videos</h3>

            {course?.course_material.length !== 0 ? (
              course?.course_material
                .filter((material) => material.type[0] === "video")
                .map((material) => (
                  <div className="grid gap-2" key={material.id}>
                    <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                        <div>
                          <h4
                            className="font-medium text-gray-900 dark:text-gray-50"
                            key={material.id}
                          >
                            {material.title}
                          </h4>
                          <p key={material.id}>
                            Description: {material.description}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                      </li>
                      <li className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-50">
                            Material Link
                          </h4>
                          <Link key={material.id} href={material.url}>
                            {material.url}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))
            ) : (
              <p>Course Material is yet to be added</p>
            )}
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Assignments</h3>
              <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <ActivityIcon className="w-5 h-5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">
                      Build a Personal Website
                    </h4>
                    <p>
                      Create a simple personal website using HTML, CSS, and
                      JavaScript.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <ActivityIcon className="w-5 h-5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">
                      CSS Layout Challenge
                    </h4>
                    <p>
                      Practice your CSS layout skills by building a responsive
                      layout.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <ActivityIcon className="w-5 h-5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">
                      JavaScript Interactivity
                    </h4>
                    <p>
                      Add interactivity to your web pages using JavaScript
                      functions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadContent;

function ActivityIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function BookIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function VideoIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
