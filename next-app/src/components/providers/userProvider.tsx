"use client";

import { users } from "@/db/schemas";
import { PropsWithChildren, createContext } from "react";

interface IUserProviderProps extends PropsWithChildren {
  user: typeof users.$inferSelect;
}

export const UserContext = createContext<
  IUserProviderProps["user"] | undefined
>(undefined);

export default function UserProvider({ user, children }: IUserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
