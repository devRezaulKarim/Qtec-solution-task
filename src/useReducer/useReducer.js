import { types } from "./actionType";

export const reducer = (state, action) => {
    switch (action.type) {
      case types.addTask:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      
  
      case types.deleteTask:
      
        return{
          ...state,
           tasks: state.tasks.filter((task)=>task.id !== action.payload),
        }


      default:
        return state;
    }
  };