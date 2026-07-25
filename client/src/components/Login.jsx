import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlaneIcon, Eye, EyeOff } from "lucide-react";
// import IslandsAndShips from "../../public/images/IslandsAndShips.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useApi from "@/hooks/useApi";
import { notify } from "./toast/notify";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login } = useAuth();
  const { data: loginData, isLoading, error, post, cancelRequest } = useApi();

  const onSubmit = async (data) => {
    const response = await post("/login", data);
    if (response?.success) {
      notify?.success(response?.message);
      console.log("response", response);
      localStorage.setItem("token", JSON.stringify(response?.jwtToken));
      login({ name: response?.name, email: response?.email });
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
          <h1 className="text-2xl font-bold text-gray-800">Tourunity Login</h1>
          <p className="text-sm text-gray-500">
            Embark on your journey with us!
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
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
                          placeholder="Enter your password"
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
              <Button className="w-full bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600 text-white hover:text-green-600 cursor-pointer">
                Log In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500 text-center">
            New to Tourunity?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
