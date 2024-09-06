import SideBar from "@/components/nav/side-bar";
import Tasks from "@/components/todovex/tasks";
import UserProfile from "@/components/todovex/user-profile";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar/>
      <h1>TodoVex</h1>
      <UserProfile/>   
      <Tasks/>
    </main>
  );
}
