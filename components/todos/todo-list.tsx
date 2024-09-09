import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function TodoList() {

  const todos = useQuery(api.todos.get)
  return (
    <div className="xl:px-40">
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
        </div>
        <div className="flex flex-col gap-1 py-4">todos</div>
    </div>
  );
}
