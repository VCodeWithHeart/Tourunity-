import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlaneIcon, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signupSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import useApi from "@/hooks/useApi";
import { notify } from "./toast/notify";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { data: signupData, isLoading, error, post, cancelRequest } = useApi();

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    const response = await post("/signup", data);
    console.log("response", response);
    if (response?.success) {
      notify?.success(response?.message);
      localStorage.setItem("verificationEmail", data.email);
      navigate("/verify-email", { state: { email: data.email } });
    } else {
      notify?.error(response?.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/IslandsAndShips.png)" }}
    >
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-xl">
        <CardHeader className="text-center space-y-2">
          <PlaneIcon className="h-12 w-12 mx-auto text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            Create your Tourunity account
          </h1>
          <p className="text-sm text-gray-500">
            Join the journey and explore with us!
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="bg-gray-50 border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-50 border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="bg-gray-50 border-gray-200 pr-10"
                          {...field}
                        />
                        <span
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600 text-white hover:text-green-600 cursor-pointer"
              >
                {!isLoading ? "Sign Up" : "Loading..."}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
