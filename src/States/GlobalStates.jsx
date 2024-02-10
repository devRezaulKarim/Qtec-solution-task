/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../useReducer/useReducer";
import { types } from "../useReducer/actionType";

const initValue = JSON.parse(localStorage.getItem("allTasks")) ?? {
  tasks: [],
};

export const GlobalContext = createContext(initValue);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  const addTask = (task) => {
    dispatch({
      type: types.addTask,
      payload: task,
    });
  };
  const deleteTask = (id) => {
    dispatch({
      type: types.deleteTask,
      payload: id,
    });
  };
  const toggleComplete = (id) => {
    dispatch({
      type: types.completeTask,
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        toggleComplete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
