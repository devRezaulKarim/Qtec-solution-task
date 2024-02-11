import { useContext, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";
import Styles from "../Styles/TaskItem.module.css";

//icons
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
export default function TaskItem({
  task,
  updatingId,
  setUpdatingId,
  setDeletingTaskId,
}) {
  const { id, todo, isComplete, priority } = task;
  const { completeTask, updateTask } = useContext(GlobalContext);

  //states for updating todo and priority
  const [updateTodo, setUpdateTodo] = useState(todo);
  const [updatePriority, setUpdatePriority] = useState(priority);
  const priorities = ["High", "Medium", "Low"];

  //handle task completion
  const handleCompleteTask = (id) => {
    completeTask(id);
    toast.success("Task completed!", {
      autoClose: 1500,
      theme: "colored",
      hideProgressBar: true,
    });
  };

  // handle task update
  const handleUpdateTask = (id) => {
    setUpdatingId(id);
  };

  const handleSavingUpdateTask = (e) => {
    e.preventDefault();

    if (updateTodo.trim()) {
      updateTask({
        todo: updateTodo,
        id: updatingId,
        priority: updatePriority,
      });
      setUpdatingId(null);
      toast.success("Task updated successfully!", {
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: true,
      });
    } else {
      toast.warn("Task can't be empty!", {
        autoClose: 1500,
        theme: "colored",
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className={`${Styles.taskItem} ${Styles[priority]}`}>
      <div>
        {/* conditionally rendering the input field and task displaying while updating the task */}
        {updatingId === id ? (
          <form onSubmit={handleSavingUpdateTask} action="">
            <input
              className={Styles.editInput}
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
          {updatingId === id ? (
            <div>
              <label htmlFor="priority">Priority Level: </label>
              <select
                name=""
                id="priority"
                value={updatePriority}
                onChange={(e) => setUpdatePriority(e.target.value)}
              >
                {priorities.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          ) : (
            <span className={Styles.priority}>Priority: {priority}</span>
          )}

          <span>{isComplete ? "Completed" : "Incomplete"}</span>
        </div>

        {/*

Buttons

*/}

        <div className={`${Styles.taskItemBtns} ${Styles[isComplete]}`}>
          {updatingId !== id && !isComplete && (
            <button
              title="Mark as completed"
              className={Styles.completeBtn}
              onClick={() => handleCompleteTask(id)}
            >
              <FaCheckSquare />
            </button>
          )}

          {/* showing the complete button if task is not completed and not in updating state, if task is in updating state then showing the save button */}

          {!isComplete && updatingId !== id ? (
            <button
              title="Update Task"
              className={Styles.updateBtn}
              onClick={() => handleUpdateTask(id)}
            >
              <MdEditDocument />
            </button>
          ) : (
            !isComplete && (
              <button
                title="Save"
                className={Styles.updateBtn}
                onClick={handleSavingUpdateTask}
              >
                <FaSave />
              </button>
            )
          )}

          <button
            title="Delete Task"
            className={Styles.deleteBtn}
            onClick={() => setDeletingTaskId(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
