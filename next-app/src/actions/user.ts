"use server";

import { actionClient } from "@/lib/safe-action";
import { getSession } from "@/services/sessions";
import { updateUserPassword } from "@/services/users";
import { zodUpdatePasswordSchema } from "@/zod/user";

export const updatePassword = actionClient
  .schema(zodUpdatePasswordSchema)
  .action(async ({ parsedInput: { currentPassword, newPassword } }) => {
    try {
      const session = await getSession();
      if (!session) {
        return { failure: "Not authenticated" };
      }
      console.log(await updateUserPassword(session.user, currentPassword, newPassword));
      return {
        success: "The password successfuly update",
      };
    } catch (e: unknown) {
      if (typeof e === "object" && e !== null && "message" in e) {
        return { failure: e.message as string };
      }
      return { failure: "Server error" };
    }
  });
