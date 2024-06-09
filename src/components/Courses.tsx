"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { useSession } from "next-auth/react";

export default function CoursesDashboard() {
  //send title description and teacher to create a course
  //This part is pretty simple
  const { data: session } = useSession();
  console.log(session?.user.email);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-600 dark:bg-transparent p-8">
        <section className="bg-gray-500 rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Course</h2>
          <form className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" type="text" placeholder="Enter course title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                placeholder="Enter course description"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input id="start-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <Input id="end-date" type="date" />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="w-full">
                Save Course
              </Button>
            </div>
          </form>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="py-2">
                <h3 className="text-xl font-bold mb-2">
                  Introduction to Programming
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of programming with Python.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Start: 2023-04-01</span>
                  <span className="text-gray-500">End: 2023-06-30</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-2">
                  Web Development Basics
                </h3>
                <p className="text-gray-600 mb-4">
                  Dive into the world of web development with HTML, CSS, and
                  JavaScript.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Start: 2023-05-15</span>
                  <span className="text-gray-500">End: 2023-07-31</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-2">
                  Data Structures and Algorithms
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the fundamental data structures and algorithms used in
                  computer science.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Start: 2023-06-01</span>
                  <span className="text-gray-500">End: 2023-08-15</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-2">
                  Mobile App Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to build mobile apps for iOS and Android platforms.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Start: 2023-07-01</span>
                  <span className="text-gray-500">End: 2023-09-30</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
