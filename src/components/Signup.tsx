import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { LoaderCircle } from "lucide-react";

function Signup() {
  const isLoading = false;
  const signupSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Your name must be atleast 3 characters long." })
      .max(32, { message: "Your name cannot exceed 32 characters." }),
    username: z
      .string()
      .min(3, { message: "Username must be atleast 3 characters long." })
      .max(32, { message: "Username cannot exceed 32 characters." }),
    email: z
      .string()
      .email({ message: "Please provide a valid email address." }),
    password: z.string()
  });

  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  

  const handleSignup = async (userData: z.infer<typeof signupSchema>) => {
   
    console.log(userData);
    
  };

  return (
    <div
      className={`w-11/12 max-w-7xl min-h-[calc(100vh-68px)] mx-auto flex justify-center items-center pt-4 pb-6`}
    >
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-9/20 flex flex-col gap-y-2 xsm:gap-y-3 border rounded-lg p-2.5 xsm:p-3.5 sm:p-5">
        <div className="font-medium text-2xl text-primary tracking-wider">
          Sign up 👨‍💻
        </div>
        <div className="text-sm opacity-80">
          Join CodeBliss today and start creating amazing frontend projects!
        </div>
        <Form {...signupForm}>
          <form
            onSubmit={signupForm.handleSubmit(handleSignup)}
            className="flex flex-col gap-y-1.5 xsm:gap-y-2.5"
          >
            <FormField
              control={signupForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signupForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Create a username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signupForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signupForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Create a password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-x-2">
                  <LoaderCircle size={20} className="animate-spin" />
                  <div>Signing up</div>
                </div>
              ) : (
                <>Sign up</>
              )}
            </Button>
          </form>
        </Form>
        <div className="flex items-center gap-x-1 mx-auto text-xs xsm:text-sm">
          <div>Already have an account?</div>
          <Link
            to="/signin"
          
            className="text-primary"
          >
            Sign in
          </Link>
          <div>here!</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
