"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-base-content/70 mt-2">Welcome back to Uploadinary</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "btn btn-primary w-full",
              card: "shadow-xl",
            },
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          redirectUrl="/home"
        />
      </div>
    </div>
  );
}