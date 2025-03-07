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
} from "../atoms/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import Link from "next/link";
import { Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { signout } from "@/utils/actions/auth";

interface IUserSettingsProps {
  name: string;
  picture: string | null;
  email: string;
}

function UserSettings({ name, picture, email }: IUserSettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 cursor-pointer">
          <AvatarImage src={picture ? `/api/images?key=${picture}` : ""} alt={name} />
          <AvatarFallback>{[...name][0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mr-10 rounded-lg">
        <DropdownMenuLabel className="flex flex-row text-sm gap-2">
          <Avatar>
            <AvatarImage src={picture ? `/api/images?key=${picture}` : ""} alt={name} />
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
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/dashboard/settings?settingsTab=profil">
              Profile{" "}
              <DropdownMenuShortcut>
                <UserCircleIcon className="w-4" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/dashboard/settings">
              Settings{" "}
              <DropdownMenuShortcut>
                <Cog6ToothIcon className="w-4" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form className="w-full" action={signout}>
            <button className="w-full text-left flex items-center justify-between" type="submit">
              Log out
              <DropdownMenuShortcut>
                <ArrowLeftEndOnRectangleIcon className="w-4" />
              </DropdownMenuShortcut>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserSettings;
