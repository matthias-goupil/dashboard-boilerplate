"use client";
import SigninForm from "@/components/forms/auth/signinForm";
import SignupForm from "@/components/forms/auth/signupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleOAuthButton from "@/components/ui/googleOAuthButton";
import TextSeparator from "@/components/ui/textSeparator";
import React from "react";

function SignupPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Card className="w-[400] p-4">
        <CardHeader className="items-center">
          <CardTitle>
            <h2 className="text-xl font-bold mb-4">Inscription</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <TextSeparator text="OU" />
          <GoogleOAuthButton />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupPage;
