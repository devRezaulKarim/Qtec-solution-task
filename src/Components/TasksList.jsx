import TaskItem from "./TaskItem";
import Styles from "../Styles/TasksList.module.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TasksList({ tasks, completeTasks }) {
  const [updatingId, setUpdatingId] = useState(null);
  return (
    <div>
      <h3 className={`${Styles.heading} ${Styles[completeTasks]}`}>
        {completeTasks ? "Completed" : "Incomplete"} Tasks: {tasks.length}
      </h3>
      <div className={Styles.tasksList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updatingId={updatingId}
            setUpdatingId={setUpdatingId}
          />
        ))}
      </div>
    </div>
  );
}
