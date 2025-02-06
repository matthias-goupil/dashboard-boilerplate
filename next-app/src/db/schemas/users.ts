import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import {sessions} from "./sessions";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  hashedPassword: varchar({ length: 255 }).notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
}));
