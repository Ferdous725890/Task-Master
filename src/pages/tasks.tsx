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
      <h1>task</h1>
      {tasks.map((task) => (
        <>
          <TaskCard task={task} ></TaskCard>
        </>
      ))}
    </div>
  );
}
