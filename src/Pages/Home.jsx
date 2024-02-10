import { useContext } from "react";
import AddTaskForm from "../Components/AddTaskForm";
import Styles from "../Styles/Home.module.css";
import { GlobalContext } from "../States/GlobalStates";

export default function Home() {
  const { tasks, completeTasks } = useContext(GlobalContext);

  return (
    <div className={Styles.container}>
      <AddTaskForm />
    </div>
  );
}
