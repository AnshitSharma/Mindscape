

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Your name must be atleast 3 characters long" })
      .max(32, { message: "Your name cannot exceed 32 characters" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    mobile: z.string().regex(/^[0-9]{10}$/, {
      message: "Enter a valid 10 digit mobile number",
    }),
    message: z
      .string()
      .min(2, {
        message: "Your message must be atleast 3 characters long",
      })
      .max(2000, {
        message: "Your message cannot exceed 2000 characters",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "208927e5-a309-4ef7-8b5b-1c4cde85bc5e",
          ...values,
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast("Your message has been sent successfully!");
      } else {
        throw new Error("Error occurred while sending message");
      }
    } catch (error) {
      console.error(error);
      toast("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-12">
    
      <div className="w-11/12 max-w-7xl mx-auto  flex flex-col items-center gap-y-5 py-16">
        <div className="text-black dark:text-white text-3xl font-bold tracking-wider">
          Send Any <span className=" text-primary">Queries</span>{" "}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:w-3/4 max-w-3xl space-y-4 bg-card/70 border rounded-xl shadow p-4 sm:p-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-wider text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-wider text-lg">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-wider text-lg">
                    Mobile number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your mobile number"
                      className="text-base"
                      {...field}
                    />
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
                  <FormLabel className="tracking-wider text-lg">
                    Your message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <div className="flex items-center gap-x-2">
                  <LoaderCircle width={20} className="animate-spin" />
                  <span className="tracking-wider text-lg">Sending</span>
                </div>
              ) : (
                <div className="tracking-wider text-lg">Send</div>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
