import { useContext } from "react";
import { GlobalContext } from "../States/GlobalStates";

/* eslint-disable react/prop-types */
export default function TaskItem({ task }) {
  const { id, todo, isComplete, priority } = task;
  const { deleteTask, toggleComplete } = useContext(GlobalContext);

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  const handleCompleteTask = (id) => {
    toggleComplete(id);
  };
  return (
    <div>
      <div>
        <p>{todo}</p>
        <span>Priority: {priority}</span>
      </div>
      <div className="taskItemBtns">
        <button onClick={() => handleCompleteTask(id)}>
          {isComplete ? "Completed" : "Complete"}
        </button>
        <button>Update</button>
        <button onClick={() => handleDeleteTask(id)}>Delete</button>
      </div>
    </div>
  );
}
