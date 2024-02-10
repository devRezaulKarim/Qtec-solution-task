import TaskItem from "./TaskItem";

/* eslint-disable react/prop-types */
export default function CompleteTasksList({ tasks }) {
  return (
    <div>
      <h3>Complete Tasks: {tasks.length}</h3>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
