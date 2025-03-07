"use server";

import { getJWT } from "../jwt";
import { actionClient } from "../safe-action";
import { zodUpdatePasswordSchema } from "../validations/user";
import { getUserById, updateUserPassword } from "@/services/users";

export const updatePassword = actionClient
  .schema(zodUpdatePasswordSchema)
  .action(async ({ parsedInput: { currentPassword, newPassword } }) => {
    try {
      const userId = await getJWT();
      if (!userId) {
        return { failure: "Not authenticated" };
      }

      const existingUser = await getUserById(userId);

      if (!existingUser) {
        return { failure: "User doesn't exist" };
      }

      if (!existingUser.hashedPassword) {
        return { failure: "User don't have password" };
      }

      await updateUserPassword(existingUser, currentPassword, newPassword);
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
