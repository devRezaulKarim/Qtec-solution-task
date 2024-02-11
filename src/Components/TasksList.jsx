import Styles from "../Styles/TasksList.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../States/GlobalStates";
import CompleteTasksList from "./CompleteTasksList";
import IncompleteTasksList from "./IncompleteTasksList";

export default function TasksList() {
  const { tasks } = useContext(GlobalContext);
  const [filteredTask, setFilteredTask] = useState([...tasks]);
  const [filter, setFilter] = useState("default");
  const [completeTasks, setCompleteTasks] = useState(
    filteredTask.filter((t) => t.isComplete)
  );
  const [incompleteTasks, setIncompleteTasks] = useState(
    filteredTask.filter((t) => !t.isComplete)
  );

  const priorities = [
    { text: "default", value: "default" },
    { text: "High to Low Priority", value: "high" },
    { text: "Low to High Priority", value: "low" },
  ];

  useEffect(() => {
    if (filter === "default") {
      setFilteredTask([...tasks]);
    } else {
      console.log("triggered");
      const fTasks = [...tasks].sort((a, b) => {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return filter === "high"
          ? priorityOrder[b.priority] - priorityOrder[a.priority]
          : priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      setFilteredTask(fTasks);
    }
  }, [filter, tasks]);

  useEffect(() => {
    setIncompleteTasks(filteredTask.filter((t) => !t.isComplete));
    setCompleteTasks(filteredTask.filter((t) => t.isComplete));
  }, [filteredTask, filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div>
        {" "}
        <h2>Total Tasks:{tasks.length}</h2>
        <div>
          <label htmlFor="filter">Filter:</label>
          <select onChange={handleFilter} name="" id="filter">
            {priorities.map((p) => (
              <option key={p.value} value={p.value}>
                {p.text}
              </option>
            ))}
          </select>
        </div>
      </div>

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
