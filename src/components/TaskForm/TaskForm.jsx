import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksOps";
import css from "./TaskForm.module.css";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
}
