import { FaTshirt } from "react-icons/fa";
import { useState } from "react";

const initialValues = {
  size: "md",
  color: "blue",
};

export default function OrderForm() {
  const [state, setState] = useState(initialValues);

  return (
    <form autoComplete="off" noValidate>
      <FaTshirt size="160" color={state.color} />

      <select name="size">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>

      <select name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
