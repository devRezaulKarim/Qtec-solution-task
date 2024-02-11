import { useContext, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";
import Styles from "../Styles/TaskItem.module.css";

//icons
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

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
    <div className={`${Styles.taskItem} ${Styles[priority]}`}>
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
      </div>

      <div className={Styles.taskItemBottom}>
        <div className={Styles.priority_status}>
          <span className={Styles.priority}>Priority: {priority}</span>
          <span>{isComplete ? "Completed" : "Incomplete"}</span>
        </div>

        {/*

Buttons

*/}

        <div className={`${Styles.taskItemBtns} ${Styles[isComplete]}`}>
          {updatingId !== id && !isComplete && (
            <button
              className={Styles.completeBtn}
              onClick={() => handleCompleteTask(id)}
            >
              <FaCheckSquare />
            </button>
          )}

          {/* showing the complete button if task is not completed and not in updating state, if task is in updating state then showing the save button */}

          {!isComplete && updatingId !== id ? (
            <button
              className={Styles.updateBtn}
              onClick={() => handleUpdateTask(id)}
            >
              <MdEditDocument />
            </button>
          ) : (
            !isComplete && (
              <button
                className={Styles.updateBtn}
                onClick={handleSavingUpdateTask}
              >
                <FaSave />
              </button>
            )
          )}

          <button
            className={Styles.deleteBtn}
            onClick={() => handleDeleteTask(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
