import TaskItem from "./TaskItem";
import Styles from "../Styles/TasksList.module.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
export default function TasksList({ tasks, completeTasks }) {
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const { deleteTask } = useContext(GlobalContext);

  const handleDeleteTask = () => {
    deleteTask(deletingTaskId);
    setDeletingTaskId(null);
    toast.error("Task has been deleted!", {
      autoClose: 2000,
      theme: "colored",
      hideProgressBar: true,
    });
  };
  return (
    <div>
      <h3 className={Styles.heading}>
        <span>
          {completeTasks ? "Completed" : "Incomplete"} Tasks: {tasks.length}
        </span>
      </h3>

      <div className={Styles.tasksList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updatingId={updatingId}
            setUpdatingId={setUpdatingId}
            setDeletingTaskId={setDeletingTaskId}
          />
        ))}
      </div>

      {deletingTaskId && (
        <div className={Styles.deleteModal}>
          <div className={Styles.modalBox}>
            <p>Are you sure, you want to delete the task?</p>
            <div className={Styles.modalBtn}>
              <button onClick={() => setDeletingTaskId(null)}>No</button>
              <button onClick={handleDeleteTask}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
