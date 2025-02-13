"use client"

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signout } from "@/actions/auth";

interface IUserSettingsProps {
  name: string;
  email: string;
  picture?: string;
}

function UserSettings({ name, email, picture }: IUserSettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 cursor-pointer">
          <AvatarImage src={picture} alt={name} />
          <AvatarFallback>{[...name][0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mr-10">
        <DropdownMenuLabel className="flex flex-row text-sm gap-2">
          <Avatar>
            <AvatarImage src={picture} alt={name} />
            <AvatarFallback>{[...name][0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <p className="flex flex-col text-sm font-medium">
            {name}
            <span className="font-normal text-xs text-muted-foreground">
              {email}
            </span>
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(async () => {
            await signout()
        })}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserSettings;
