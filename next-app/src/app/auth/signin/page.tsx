import SigninForm from "@/components/forms/auth/signinForm";
import React from "react";

function SigninPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold mb-4">Connexion</h2>
      <div className="max-w-md mx-auto w-[400]">
        <SigninForm />
      </div>
    </div>
  );
}

export default SigninPage;
