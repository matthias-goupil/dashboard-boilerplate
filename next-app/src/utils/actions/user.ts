"use server";

import { users } from "@/models";
import { eq } from "drizzle-orm";
import { checkPassword, hashPassword } from "../hash";
import { getJWT } from "../jwt";
import { actionClient } from "../safe-action";
import { zodUpdatePasswordSchema } from "../validations/user";
import { db } from "../db";

export const updatePassword = actionClient
  .schema(zodUpdatePasswordSchema)
  .action(async ({ parsedInput: { currentPassword, newPassword } }) => {
    try {
      const userId = await getJWT();
      if (!userId) {
        return { failure: "Not authenticated" };
      }

      const existingUser = await db.query.users.findFirst({
        where: eq(users.id, userId),
      });

      if (!existingUser) {
        return { failure: "User doesn't exist" };
      }

      if (!existingUser.hashedPassword) {
        return { failure: "User don't have password" };
      }

      if (await checkPassword(currentPassword, existingUser.hashedPassword)) {
        await db
          .update(users)
          .set({ hashedPassword: await hashPassword(newPassword) })
          .where(eq(users.id, userId));

        return {
          success: "The password successfuly update",
        };
      }
    } catch (e: unknown) {
      if (typeof e === "object" && e !== null && "message" in e) {
        return { failure: e.message as string };
      }
      return { failure: "Server error" };
    }
  });
