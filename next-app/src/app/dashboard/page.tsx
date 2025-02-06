import { signout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import React from "react";

function DashboardPage() {
  return (
    <div>
      <form action={signout}>
        <Button type="submit">Déconnexion</Button>
      </form>
    </div>
  );
}

export default DashboardPage;
