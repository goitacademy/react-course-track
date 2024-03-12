import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import TaskList from "./TaskList/TaskList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import TaskForm from "./TaskForm/TaskForm";
import TextFilter from "./TextFilter/TextFilter";
import { fetchTasks } from "../redux/tasksOps";
import { getError, getLoading } from "../redux/tasksSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Selector memoization</h1>
      <TaskForm />
      <TextFilter />
      {loading && <Loader>Loading tasks, please wait</Loader>}
      {error && <Error>Error message</Error>}
      <TaskList />
    </Layout>
  );
}
