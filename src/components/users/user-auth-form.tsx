"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Turnstile } from "@marsidev/react-turnstile"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email!" }),
})
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  const [isGithubLoading, setIsGithubLoading] = React.useState<boolean>(false)
  const [showSend, setShowSend] = React.useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data.email);
    signIn("email", {
      email: data.email,
      redirect: false,
      callbackUrl: "/dashboard",
    })
    toast({
      title: "Email sent successfully!",
    })
    setShowSend(false)
  }
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGoogleLoading(true)
          setIsLoading(true)
          signIn("google")
        }}
        disabled={isGoogleLoading || isLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGithubLoading(true)
          setIsLoading(true)
          signIn("github")
        }}
        disabled={isGithubLoading || isLoading}
      >
        {isGithubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.github className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Github
      </button>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@domain.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We will send you a login link.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!showSend ? (
              <Button disabled={showSend} type="submit">
                Send login link
              </Button>
            ) : (
              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || ""
                }
                onError={() => {
                  setShowSend(true)
                }}
              />
            )}
          </form>
        </Form>
      </div>
    </div>
  )
}
