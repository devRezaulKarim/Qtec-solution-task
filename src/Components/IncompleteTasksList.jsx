import { useState } from "react";
import TaskItem from "./TaskItem";

/* eslint-disable react/prop-types */
export default function IncompleteTasksList({ tasks }) {
  const [updatingId, setUpdatingId] = useState(null);

  return (
    <div>
      <h3>Incomplete Tasks: {tasks.length}</h3>
      <div>
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
