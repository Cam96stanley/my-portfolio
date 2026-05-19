"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../primitives/Button";
import { Input } from "../primitives/Input";
import { Textarea } from "../primitives/Textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Please tell me more"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch(`https://ntfy.sh/${process.env.NEXT_PUBLIC_NTFY_TOPIC}`, {
        method: "POST",
        body: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        headers: {
          Title: "New Contact Form Submission",
        },
      });
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8">
        <div>
          <label className="para-sm-upper-light text-subtle" htmlFor="name">
            Your name
          </label>
          <Input id="name" className="mt-4" {...register("name")} />
          {errors.name && (
            <p className="para-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="para-sm-upper-light text-subtle" htmlFor="email">
            Your email
          </label>
          <Input id="email" className="mt-4" {...register("email")} />
          {errors.email && (
            <p className="para-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="para-sm-upper-light text-subtle" htmlFor="message">
            Tell me more
          </label>
          <Textarea id="message" className="mt-4" {...register("message")} />
          {errors.message && (
            <p className="para-sm text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="para-sm-light text-subtle">
            Usually replies within 48 hours
          </p>
          <Button
            type="submit"
            className="flex items-center gap-2 para-mono-rg border-border p-4 hover:text-sky"
          >
            Send it
            <ArrowUpRightIcon className="text-accent" size={16} />
          </Button>
        </div>
      </div>
    </form>
  );
}
