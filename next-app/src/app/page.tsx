import { Button } from "@/components/ui/button";
import { getSession } from "@/services/sessions";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 ">
      <div className="flex justify-center items-center gap-4">
        {!session && (
          <>
            <Link href="/auth/signin">
              <Button>Connexion</Button>
            </Link>

            <Link href="/auth/signup">
              <Button>Inscription</Button>
            </Link>
          </>
        )}
      </div>
      <p>Home page</p>
    </div>
  );
}
