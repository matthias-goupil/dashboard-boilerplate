import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signout } from "@/actions/auth";

interface IUserSettingsProps {
  name: string;
  picture: string;
  email: string;
}

function UserSettings({ name, picture, email }: IUserSettingsProps) {
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
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form className="w-full" action={signout}>
            <button className="w-full text-left" type="submit">
              Log out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserSettings;
