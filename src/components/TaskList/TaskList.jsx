import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { getTasks } from "../../redux/tasksSlice";
import { getTextFilter } from "../../redux/filtersSlice";
import css from "./TaskList.module.css";

export default function TaskList() {
  const tasks = useSelector(getTasks);
  const textFilter = useSelector(getTextFilter);

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(textFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
