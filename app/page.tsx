import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TodoVex</h1>
      <Button> Hi! </Button>
      <p>Tasks</p>
      {tasks?.map((task, idx) => <p key = {idx}>{JSON.stringify(task)}</p>)}
    </main>
  );
}
