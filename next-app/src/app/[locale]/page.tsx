import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 ">
      <div className="flex justify-center items-center gap-4">
        <>
          <Link href="/auth/signin">
            <Button>Connexion</Button>
          </Link>

          <Link href="/auth/signup">
            <Button>Inscription</Button>
          </Link>
        </>
      </div>
    </div>
  );
}
