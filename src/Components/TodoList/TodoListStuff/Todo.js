import React from "react";
import { TodosContext } from "../../../Contexts/TodosProvider";
import { Checkbox, Card, Badge } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Edit from "./Edit";

export default function Todo({ todo }) {
  const { changeTodo, deleteTodo } = React.useContext(TodosContext);

  const completeHandler = (e) => {
    changeTodo({
      ...todo,
      completed: e.target.checked,
    });
  };

  return (
    <div className="flex items-center justify-center mt-2 px-4 md:px-0">
      <div className="w-full md:w-4/6">
        <Badge.Ribbon color={todo.color}>
          <Card hoverable={true}>
            <div className="flex items-center">
              <Checkbox
                defaultChecked={todo.completed}
                className="border-1 border-solid border-slate-700 mr-3"
                onClick={completeHandler}
              ></Checkbox>
              <div
                className={`w-5/6 text-middle ${
                  todo.completed ? "line-through text-gray-700/50" : ""
                }`}
              >
                {todo.text}
              </div>

              <Edit todo={todo} />
              <button
                onClick={() => deleteTodo(todo.id)}
                className="mr-3 p-1 w-max  hover:text-red-500 text-slate-400 font-medium"
              >
                <DeleteOutlined className="text-base" />
              </button>
            </div>
          </Card>
        </Badge.Ribbon>
      </div>
    </div>
  );
}
