import Tasks from "@/components/todovex/tasks";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TodoVex</h1>     
      <Tasks/>
    </main>
  );
}
