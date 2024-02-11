import AddTaskForm from "../Components/AddTaskForm";
import TasksListContainer from "../Components/TasksListContainer";
import Styles from "../Styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Qtec Solution Todo list</h1>
      <AddTaskForm />
      <TasksListContainer />
      <p className={Styles.copyright}>Developed by Md. Rezaul Karim</p>
    </div>
  );
}
