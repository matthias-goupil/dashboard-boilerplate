import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import {sessions} from "./sessions";
import { accounts } from "./accounts";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  hashedPassword: text("hashed_password"), // Nullable pour OAuth
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
export const userRelations = relations(users, ({ many }) => ({
  sessions: many(sessions, {
    relationName: "user_sessions"
  }),
  accounts: many(accounts, {
    relationName: "user_accounts"
  })
}));
