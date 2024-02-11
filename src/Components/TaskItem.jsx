import { useContext, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";

/* eslint-disable react/prop-types */
export default function TaskItem({ task, updatingId, setUpdatingId }) {
  const { id, todo, isComplete, priority } = task;
  const { deleteTask, toggleComplete, updateTask } = useContext(GlobalContext);

  const [updateTodo, setUpdateTodo] = useState("");

  //handle task deletion
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  //handle task completion
  const handleCompleteTask = (id) => {
    toggleComplete(id);
  };

  // handle task update
  const handleUpdateTask = (id) => {
    setUpdatingId(id);
    setUpdateTodo(todo);
  };

  const handleSavingUpdateTask = (e) => {
    e.preventDefault();
    updateTask({ todo: updateTodo, id: updatingId });
    setUpdatingId(null);
  };

  return (
    <div>
      <div>
        {updatingId === id ? (
          <form onSubmit={handleSavingUpdateTask} action="">
            <input
              value={updateTodo}
              type="text"
              onChange={(e) => setUpdateTodo(e.target.value)}
            />
          </form>
        ) : (
          <p>{todo}</p>
        )}

        <div>
          <span>Priority: {priority}</span>
          <span>Status: {isComplete ? "Completed" : "Incomplete"}</span>
        </div>
      </div>
      <div className="taskItemBtns">
        {updatingId !== id && !isComplete && (
          <button onClick={() => handleCompleteTask(id)}>
            Mark as Complete
          </button>
        )}

        {/* showing the complete button if task is not completed and not in updating state, if task is in updating state then showing the save button */}

        {!isComplete && updatingId !== id ? (
          <button onClick={() => handleUpdateTask(id)}>Update</button>
        ) : (
          !isComplete && <button onClick={handleSavingUpdateTask}>Save</button>
        )}

        <button onClick={() => handleDeleteTask(id)}>Delete</button>
      </div>
    </div>
  );
}
