import { AddTaskModule } from "@/components/ui/module/task/AddTaskModule";
import TaskCard from "@/components/ui/module/task/taskCard";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

export default function Task() {
  const tasks = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(filter);
  console.log(tasks);
  return (
    <div>
     <div className="flex justify-between mb-4 mt-4">
       <h1 className="font-bold"> | Task |</h1>

      <AddTaskModule></AddTaskModule>
     </div>
      {tasks.map((task) => (
        <>
          <TaskCard task={task}></TaskCard>
        </>
      ))}
    </div>
  );
}
