"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={24}
              height={24}
              alt={`${name} profile picture`}
              className="rounded-full"
            />
          )}
          <p className="truncate">{email}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="lg:w-full px-28">log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
