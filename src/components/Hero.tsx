import { FC, JSX, ReactNode, SVGProps, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import { Card } from "./ui/card";
import { Arrow } from "@radix-ui/react-dropdown-menu";
export default function Hero() {
  return (
    <>
      <section className="space-y-8 pb-12 pt-4 md:space-y-16 md:pt-10 lg:py-32">
        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-center">
          Learning Management System
        </h1>
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-auto mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Empower Your Classroom with LMS
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                LMS is an AI-driven Learning Management System that provides
                powerful data analytics and student monitoring tools to help
                teachers and students succeed.
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <Link
                  href="/sign-in"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/lmss.jpg"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section
        className="space-y-8 pb-12 pt-4 md:space-y-16 md:pt-10 lg:py-32"
        id="features"
      >
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-3 text-sm dark:bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Unlock the Power of Data-Driven Learning
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme LMS provides a comprehensive suite of tools to help
                teachers and students track progress, identify areas for
                improvement, and make data-driven decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Student Monitoring</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track individual student progress, engagement, and performance
                with real-time analytics.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Adaptive Learning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Personalize learning paths based on student needs and
                preferences using AI-driven recommendations.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Data-Driven Insights</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gain valuable insights into class performance and identify areas
                for improvement with comprehensive reporting.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Collaboration Tools</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Facilitate seamless collaboration between teachers and students
                with built-in communication and sharing features.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Automated Grading</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Save time and ensure consistency with AI-powered grading and
                feedback for assignments and assessments.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Customizable Dashboards</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailor the platform to your specific needs with customizable
                dashboards and reporting tools.
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Request a Demo
            </Link>
            <Link
              href="/#about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Empower Your Classroom with LMS
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              LMS is designed to help teachers and students succeed with
              powerful data analytics, personalized learning, and seamless
              collaboration.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Request a Demo</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link
                href="#"
                className="underline underline-offset-2"
                prefetch={false}
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section
        className="space-y-8 pb-12 pt-4 md:space-y-16 md:pt-10 lg:py-20"
        id="about"
      >
        {" "}
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-3 text-sm dark:bg-gray-800">
                About LMS
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transforming Education with Data-Driven Insights
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme LMS is an innovative Learning Management System that
                leverages the power of AI and data analytics to help teachers
                and students achieve their full potential. By providing
                real-time insights, personalized learning pathways, and seamless
                collaboration tools, Acme LMS empowers educators to create
                engaging and effective learning experiences.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/about.jpg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Personalized Learning</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Acme LMS uses AI-driven recommendations to create
                      personalized learning paths for each student, ensuring
                      they receive the support they need to succeed.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Comprehensive Reporting
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Gain valuable insights into class performance and identify
                      areas for improvement with Acme LMS&apos;s comprehensive
                      reporting and analytics tools.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Collaborative Learning
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Acme LMS fosters collaboration between teachers and
                      students with built-in communication and sharing features,
                      enabling seamless teamwork and engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that best fits your needs and budget.
            </p>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:border-gray-800">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Perfect for individual learners.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold">$9</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  per month
                </p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Access to all core features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Personalized learning paths
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Basic reporting and analytics
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 text-red-500" />
                  Collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 text-red-500" />
                  Advanced analytics and insights
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:border-gray-800">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ideal for small to medium-sized teams.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold">$29</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  per month
                </p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Access to all core features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Personalized learning paths
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Advanced reporting and analytics
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 text-red-500" />
                  Dedicated account manager
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="space-y-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:border-gray-800">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored for large organizations.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold">Custom</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Contact us for pricing
                </p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items" />
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unlock the Potential of Your Classroom with LMS
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Acme LMS is designed to empower teachers and students with the
              tools they need to succeed. From personalized learning to
              comprehensive data analytics, our platform is transforming
              education.
            </p>
          </div>
          <div className="flex space-x-4 lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Request a Demo
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-"
              prefetch={false}
            >
              <ArrowBigRightIcon className="text-black" />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About Our AI-Driven LMS
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-driven Learning Management System is the result of years of
              research and development, driven by a passionate team of
              educators, technologists, and data scientists. We are committed to
              transforming the way teaching and learning happens, empowering
              both teachers and students to achieve their full potential.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 AI LMS. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
