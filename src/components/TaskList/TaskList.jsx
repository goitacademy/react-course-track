import css from "./TaskList.module.css";

export default function TaskList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.listItem}>
          <p className={css.text}>{item.text}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
