"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {
  params: { id: string };
};
const Courses = ({ params }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const id = params.id;
  return (
    <section className=" grid gap-2">
      <h1 className="text-black dark:text-white">Upload Your Content</h1>

      <div className="grid">
        <form
          id="upload-form"
          encType="multipart/form-data"
          onSubmit={async (event) => {
            event.preventDefault();

            if (!inputFileRef.current?.files) {
              throw new Error("No file selected");
            }

            const file = inputFileRef.current.files[0];
            const formData = new FormData(event.target as HTMLFormElement);
            console.log(formData);
            const response = await fetch(
              `/api/courses/upload?filename=${file.name}`,
              {
                method: "POST",
                body: file,
              }
            );

            const newBlob = (await response.json()) as PutBlobResult;

            setBlob(newBlob);
          }}
          className="flex gap-2"
        >
          <Input type="text" name="title" placeholder="Title" required />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="document">Document</SelectItem>
            </SelectContent>
          </Select>
          <Input type="hidden" name="course_id" value="1" />
          <Input name="file" ref={inputFileRef} type="file" required />
          <Button type="submit">Upload</Button>{" "}
        </form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
