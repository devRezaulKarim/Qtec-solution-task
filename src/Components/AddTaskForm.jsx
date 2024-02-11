import Styles from "../Styles/AddTaskForm.module.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";
//toast message
import { toast } from "react-toastify";

//icons
import { MdAddTask } from "react-icons/md";

export default function AddTaskForm() {
  const priorities = ["High", "Medium", "Low"];

  //states to manage task input and priority input.
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(priorities[0]);

  //handling context
  const { addTask } = useContext(GlobalContext);

  //handling add task action
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        todo: task.trim(),
        priority,
        isComplete: false,
      };
      addTask(newTask);
      setTask("");
      setPriority(priorities[0]);
    } else {
      toast.warn("Task can't be empty!", {
        autoClose: 1500,
        theme: "colored",
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className={Styles.formContainer}>
      <form onSubmit={handleSubmit} action="">
        <div className={Styles.taskInput}>
          <input
            placeholder="Enter Task"
            type="text"
            name="task"
            id="taskInput"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className={Styles.priority_btn}>
          <div className={Styles.priority}>
            <label htmlFor="priority">Priority Level: </label>
            <select
              name=""
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {priorities.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className={Styles.btn}>
            <button>
              <MdAddTask />
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
