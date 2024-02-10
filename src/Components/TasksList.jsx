import Styles from "../Styles/TasksList.module.css";
import { useContext } from "react";
import { GlobalContext } from "../States/GlobalStates";
import CompleteTasksList from "./CompleteTasksList";
import IncompleteTasksList from "./IncompleteTasksList";

export default function TasksList() {
  const { tasks } = useContext(GlobalContext);
  const completeTasks = tasks.filter((t) => t.isComplete);
  const incompleteTasks = tasks.filter((t) => !t.isComplete);

  return (
    <div>
      <h2>Total Tasks:{tasks.length}</h2>
      <div className={Styles.tasksList}>
        <div className={Styles.incompleteTasks}>
          <IncompleteTasksList tasks={incompleteTasks} />
        </div>
        <div className={Styles.completeTasks}>
          <CompleteTasksList tasks={completeTasks} />
        </div>
      </div>
    </div>
  );
}
