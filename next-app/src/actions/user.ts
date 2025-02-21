"use server";

import { getJWT } from "@/lib/jwt";
import { actionClient } from "@/lib/safe-action";
import { zodUpdatePasswordSchema } from "@/zod/user";

export const updatePassword = actionClient
  .schema(zodUpdatePasswordSchema)
  .action(async ({ parsedInput: { currentPassword, newPassword } }) => {
    try {
      const userId = await getJWT();
      if (!userId) {
        return { failure: "Not authenticated" };
      }
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
