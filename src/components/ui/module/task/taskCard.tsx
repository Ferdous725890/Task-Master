import { cn } from "@/lib/utils";
import type { Itask } from "@/type";

interface Iprops {
  task: Itask;
}

export default function TaskCard({ task }: Iprops) {
  return (
    <div className=" mb-5 flex justify-between border rounded-bl-xl rounded-tr-xl border-green-600 px-4 text-blue-600 py-2">
      <div className="flex justify-center">
        <div
          className={cn("px-1 mr-2 bg-red-300 rounded-full", {
            "bg-green-500": task.priority === "Low",
            "bg-yellow-500": task.priority === "Medume",
            "bg-red-500": task.priority === "High",
          })}
        ></div>
      </div>
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>
      </div>
      <div className="">
        <div>
          <button className="text-green-400 font-medium text-sm">Edit </button>
        </div>
        <div>
          <button className="text-red-300 font-medium text-sm">Deleted</button>
        </div>{" "}
      </div>
    </div>
  );
}
