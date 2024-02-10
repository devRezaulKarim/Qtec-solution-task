import AddTaskForm from "../Components/AddTaskForm";
import TasksList from "../Components/TasksList";
import Styles from "../Styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <AddTaskForm />
      <TasksList />
    </div>
  );
}
