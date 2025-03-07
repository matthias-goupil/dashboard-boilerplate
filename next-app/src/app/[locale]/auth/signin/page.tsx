import SigninForm from "@/components/organisms/forms/auth/signinForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card";
import GoogleOAuthButton from "@/components/atoms/googleOAuthButton";
import TextSeparator from "@/components/atoms/textSeparator";
import React from "react";

function SigninPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Card className="w-[400] p-4">
        <CardHeader className="items-center">
          <CardTitle>
            <h2 className="text-xl font-bold mb-4">Connexion</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          
          <SigninForm />
          <TextSeparator text="OU"/>
          <GoogleOAuthButton />
        </CardContent>
      </Card>
    </div>
  );
}

export default SigninPage;
