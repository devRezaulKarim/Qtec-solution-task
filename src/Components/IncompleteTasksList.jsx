import TaskItem from "./TaskItem";

/* eslint-disable react/prop-types */
export default function IncompleteTasksList({ tasks }) {
  return (
    <div>
      <h3>Incomplete Tasks: {tasks.length}</h3>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
