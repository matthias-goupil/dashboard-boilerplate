import { db } from "@/db/db";

export async function getUsers() {
  return await db.query.users.findMany()
}

