"use server";

import { signinWithCredentials, signupWithCredentials } from "@/services/auth";
import { redirect } from "next/navigation";
import { actionClient } from "../safe-action";
import { zodSigninSchema, zodSignupSchema } from "../validations/auth";
import { destroyJWT } from "../jwt";

export const signin = actionClient
  .schema(zodSigninSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      await signinWithCredentials(email, password);
      return {
        success: "Successfully logged in",
      };
    } catch {
      return { failure: "Incorrect credentials" };
    }
  });

export const signup = actionClient
  .schema(zodSignupSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    try {
      await signupWithCredentials(email, password, name);
      return {
        success: "Successfully sign up",
      };
    } catch {
      return { failure: "User already exists" };
    }
  });

export async function signout() {
  await destroyJWT();
  redirect("/");
}
