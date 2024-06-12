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
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "../Icons";
type Props = {
  id: string;
};
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  type: z.string().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  file: z.instanceof(FileList).refine((file) => file.length > 0),
});

const UploadContentForm = ({ id }: Props) => {
  const [loading, isLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>();
  const fileRef = form.register("file");
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  console.log(id);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    isLoading(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("type", values.type);
    formData.append("courseId", id);
    // Assuming `values.file` is a FileList or an array of files
    // and you want to upload the first file
    if (values.file.length > 0) {
      formData.append("file", values.file[0]);
    }
    const response = await fetch(
      `/api/courses/upload?filename=${values.file[0].name}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);
    isLoading(false);
  };
  return (
    <section className=" grid gap-2">
      <h1 className="text-black dark:text-white">Upload Your Content</h1>

      <div className="grid">
        <Form {...form}>
          <form
            id="upload-form"
            encType="multipart/form-data"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Course Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="text">Text</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select> */}
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input type="file" placeholder="shadcn" {...fileRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit">
              {loading ? <Icons.spinner className="animate-spin" /> : "Upload"}
            </Button>{" "}
          </form>
        </Form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadContentForm;
