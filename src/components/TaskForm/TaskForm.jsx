import css from "./TaskForm.module.css";

export default function TaskForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

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
