import db from "..";
import user from "../schemas/users";

export async function getUsers() {
  return await db.select().from(user);
}
