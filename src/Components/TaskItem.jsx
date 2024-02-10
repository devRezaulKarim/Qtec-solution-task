import { useContext } from "react";
import { GlobalContext } from "../States/GlobalStates";

/* eslint-disable react/prop-types */
export default function TaskItem({ task }) {
  const { id, todo, isComplete, priority } = task;
  const { deleteTask } = useContext(GlobalContext);

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  return (
    <div>
      <div>
        <p>{todo}</p>
        <span>Priority: {priority}</span>
      </div>
      <div className="taskItemBtns">
        <button>{isComplete ? "Completed" : "Complete"}</button>
        <button>Update</button>
        <button onClick={() => handleDeleteTask(id)}>Delete</button>
      </div>
    </div>
  );
}
