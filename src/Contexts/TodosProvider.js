import React, { useState, useEffect } from "react";
import { message } from "antd";
import { TODO_FILTERS } from "../Constants/config";
export const TodosContext = React.createContext({
  todos: [],
  setTodos: () => {},
});

//-------------Compare function for sort---------------//
function compareFn(a, b) {
  if (a.completed === false && b.completed === true) {
    return -1;
  }
  if (a.completed === true || b.completed === false) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(19970925);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState(TODO_FILTERS.ALL);

  useEffect(() => {
    switch (filter) {
      case TODO_FILTERS.COMPLETED:
        setFilteredTodos(
          todos.filter(
            (todo) =>
              todo.completed === true && todo.projectId === selectedProjectId
          )
        );
        break;
      case TODO_FILTERS.UNCOMPLETED:
        setFilteredTodos(
          todos.filter(
            (todo) =>
              todo.completed === false && todo.projectId === selectedProjectId
          )
        );
        break;
      default:
        setFilteredTodos(
          todos
            .filter((todo) => todo.projectId === selectedProjectId)
            .sort(compareFn)
        );
        break;
    }
  }, [todos, filter, selectedProjectId, projects]);

  const addProject = (projectName) => {
    // this condition uses for empty spaces:
    if (!projectName || /^\s*$/.test(projectName)) {
      message.warning("Context Is Not Valid");
      return;
    }
    setProjects([
      ...projects,
      {
        title: projectName,
        color: null,
        id: Math.floor(Math.random() * 19970925),
      },
    ]);
  };

  const deleteProject = () => {
    if (projects.length === 0) {
      message.warning("You can't delete this");
      return false;
    }
    setProjects(projects.filter((project) => project.id !== selectedProjectId));
    message.success("Project is deleted");
    return true;
  };

  const addTodo = (todoText, projectId = selectedProjectId) => {
    //this condition uses for empty spaces:
    if (!todoText || /^\s*$/.test(todoText)) {
      message.warning("Context Is Not Valid");
      return;
    }
    setTodos([
      ...todos,
      {
        text: todoText,
        completed: false,
        id: Math.floor(Math.random() * 19970925),
        projectId,
      },
    ]);
  };

  const editTodo = (todo, editedTodoText) => {
    if (!editedTodoText || /^\s*$/.test(editedTodoText)) {
      message.warning("Context Is Not Valid");
      return;
    }
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            text: editedTodoText,
          };
        }
        return item;
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((el) => el.id !== todoId));
  };

  const changeTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
          };
        }
        return item;
      })
    );
  };
  const clearCompletedTodos = () => {
    if (filteredTodos.filter((todo) => todo.completed === true).length === 0) {
      message.warning("There Is No Completed Todos");
      return false;
    }
    setTodos(
      todos.filter(
        (todo) =>
          !(todo.projectId === selectedProjectId && todo.completed === true)
      )
    );
    message.success("Completed Todos are deleted");
    return true;
  };

  return (
    <TodosContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        selectedProjectId,
        setSelectedProjectId,
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        changeTodo,
        editTodo,
        filter,
        setFilter,
        filteredTodos,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
