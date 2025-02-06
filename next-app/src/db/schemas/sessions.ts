import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from ".";

export const sessions = pgTable("sessions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionToken: varchar({ length: 255 }).notNull(),
  userId: integer()
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
  expires: timestamp().notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
