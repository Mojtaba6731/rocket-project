import React from "react";
import { TodosContext } from "../../../Contexts/TodosProvider";
import Todo from "./Todo";

export default function List() {
  const { filteredTodos } = React.useContext(TodosContext);

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
