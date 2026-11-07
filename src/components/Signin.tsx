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
import { Link, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { signInUser } from "@/lib/actions/auth.actions";
import { useAuth } from "@/context/AuthContext";

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signinSchema = z.object({
    email: z
      .string()
      .email({ message: "Please provide a valid email address." }),
    password: z.string().min(1, { message: "Please provide your password." }),
    age: z.string().min(1, { message: "Please provide your age." }),
  });

  const signinForm = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      age: "",
    },
  });

  const { login } = useAuth();

  // Only email and password are sent; Appwrite checks the password.
  const handleSignin = async ({ email, password }: z.infer<typeof signinSchema>) => {
    setIsLoading(true);
    try {
      await signInUser({ email, password });
      login();
      navigate("/");
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      if (message === "Invalid credentials") {
        signinForm.setError("root", {
          message: "Incorrect email or password",
        });
      } else if (message === "Too many attempts") {
        signinForm.setError("root", {
          message: "Too many sign-in attempts. Please wait a few minutes and try again.",
        });
      } else {
        signinForm.setError("root", {
          message: "An error occurred during sign in",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-11/12 max-w-7xl min-h-[calc(100vh-68px)] mx-auto flex justify-center items-center pt-4 pb-6">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-9/20 flex flex-col gap-y-2 xsm:gap-y-3 border rounded-lg p-2.5 xsm:p-3.5 sm:p-5">
        <div className="font-medium text-2xl text-primary tracking-wider">Sign in 👋</div>
        <div className="text-sm opacity-80">Welcome back to MindScape!</div>
        
        <Form {...signinForm}>
          <form
            onSubmit={signinForm.handleSubmit(handleSignin)}
            className="flex flex-col gap-y-1.5 xsm:gap-y-2.5"
          >
            <FormField
              control={signinForm.control}
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
              control={signinForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signinForm.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your age" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {signinForm.formState.errors.root && (
              <div className="text-red-500 text-sm">
                {signinForm.formState.errors.root.message}
              </div>
            )}

            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-x-2">
                  <LoaderCircle size={20} className="animate-spin" />
                  <div>Signing in</div>
                </div>
              ) : (
                <div>Sign in</div>
              )}
            </Button>
          </form>
        </Form>

        <div className="flex items-center gap-x-1 mx-auto text-xs xsm:text-sm">
          <div>New to Mindscape?</div>
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
          <div>now</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
