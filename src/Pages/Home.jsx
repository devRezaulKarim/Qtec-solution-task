import AddTaskForm from "../Components/AddTaskForm";
import TasksListContainer from "../Components/TasksListContainer";
import Styles from "../Styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <AddTaskForm />
      <TasksListContainer />
    </div>
  );
}
