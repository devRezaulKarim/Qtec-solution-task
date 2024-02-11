import { types } from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.addTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case types.completeTask:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isComplete: true,
            };
          } else return task;
        }),
      };

    case types.updateTask:
      return{
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              todo: action.payload.todo,
            };
          } else return task;
        }),
      }

    default:
      return state;
  }
};
