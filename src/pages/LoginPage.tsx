"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your GyanSetu account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {/* Navigate to onboarding */}

        <Button
          type="submit"
          className="w-full"
          onClick={() => navigate("/onboarding")}
        >
          Login
        </Button>
        <Button variant="neutral" className="w-full">
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

function LoginPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-4">
        <LoginCard />
      </div>
    </>
  );
}

export default LoginPage;
