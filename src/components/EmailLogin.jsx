import React from 'react'
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from 'next-auth/react';

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function EmailLogin() {
    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data) => {
    signIn("email", { email: data.email });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none h-10 w-full"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#3b37ff] h-10 w-10 p-0 rounded-none" type="submit">
          <Send size={15} />
        </Button>
      </form>
    </Form>
  );
}
