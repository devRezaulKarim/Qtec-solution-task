import { types } from "./actionType";

export const reducer = (state, action) => {
    switch (action.type) {
      case types.addTask:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      
  
      default:
        return state;
    }
  };