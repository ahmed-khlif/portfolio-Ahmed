"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Your message could not be sent.");
      }

      form.reset();

      storeModal.onOpen({
        title: "Message sent",
        description:
          "Thanks for reaching out — I appreciate it and will get back to you within two working days.",
        icon: Icons.successAnimated,
      });
    } catch (err) {
      const reason =
        err instanceof Error ? err.message : "Your message could not be sent.";

      storeModal.onOpen({
        title: "Something went wrong",
        description: `${reason} You can also email me directly at ${siteConfig.email}.`,
        icon: Icons.close,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
