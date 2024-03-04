import UserForm from "./UserForm";

export default function App() {
  const addUser = (newUser) => {
    console.log(newUser);
  };

  return (
    <div>
      <h1>Forms with Formik</h1>
      <UserForm onAdd={addUser} />
    </div>
  );
}
