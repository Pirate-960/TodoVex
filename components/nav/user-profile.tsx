"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;
  return (
    <div
      className="flex items-center justify-start gap-1 
    lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          width={24}
          height={24}
          alt="user profile picture"
          className="rounded-full"
        />
      )}
      <p className="truncate">{name}</p>
    </div>
  );
}
