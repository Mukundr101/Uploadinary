"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-base-content/70 mt-2">Create your Uploadinary account</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "btn btn-primary w-full",
              card: "shadow-xl",
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          redirectUrl="/home"
        />
      </div>
    </div>
  );
}