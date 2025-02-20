"use client";
import SignupForm from "@/components/forms/auth/signupForm";
import React from "react";

function SignupPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold mb-4">Inscription</h2>
    <div className="max-w-md mx-auto w-[400]">
      <SignupForm />
    </div>
  </div>
  );
}

export default SignupPage;
