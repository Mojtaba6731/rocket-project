import React, { useState } from "react";
import { TODO_FILTERS } from "../../../Constants/config";
import { TodosContext } from "../../../Contexts/TodosProvider";
import {
  Menu,
  Dropdown,
  Input,
  Select,
  Popconfirm,
  message,
  Button,
} from "antd";
import {
  DeleteOutlined,
  ClearOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export default function Form() {
  //Add Required Global states
  const { addTodo, filter, setFilter, clearCompletedTodos, deleteProject } =
    React.useContext(TodosContext);

  //Local States
  const [todoText, setTodoText] = useState("");

  //----------------------------------------//
  const { Option } = Select;
  const todoTextHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  const filterHandler = (value) => {
    setFilter(value);
  };

  //----------------------------------------//
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Popconfirm
          title="Are you sure to delete all completed Todos?"
          onConfirm={() => clearCompletedTodos()}
          onCancel={() => message.error("Delete Canceled")}
          okText="Yes"
          cancelText="No"
        >
          <button href="#" className="hover:text-orange-400 flex items-center">
            <ClearOutlined className="mr-1" /> Dismiss Completeds
          </button>
        </Popconfirm>
      </Menu.Item>
      <Menu.Item key="1">
        <Popconfirm
          title="Are you sure to delete this Project?"
          onConfirm={() => deleteProject()}
          onCancel={() => message.error("Delete Project Canceled")}
          okText="Yes"
          cancelText="No"
        >
          <a href="#" className="hover:text-red-500 flex items-center">
            <DeleteOutlined className="mr-1" /> Delete This Project
          </a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  //----------------------------------------//
  return (
    <div className="flex items-center justify-center mb-6 mt-2">
      <Select
        defaultValue={filter}
        onChange={filterHandler}
        className="mx-2 w-24"
      >
        <Option value={TODO_FILTERS.ALL}>All</Option>
        <Option value={TODO_FILTERS.COMPLETED}>Done</Option>
        <Option value={TODO_FILTERS.UNCOMPLETED}>UnDone</Option>
      </Select>

      <div className="w-3/5 lg:w-3/6 xl:w-2/5">
        <Input
          allowClear
          autoSize
          value={todoText}
          placeholder="Type a todo ..."
          onChange={todoTextHandler}
        />
      </div>

      <Button
        className="flex items-center justify-center px-2"
        onClick={submitHandler}
      >
        <PlusOutlined className="text-sm" />
      </Button>

      <Dropdown overlay={menu} trigger={["click"]}>
        <button href="#" onClick={(e) => e.preventDefault()}>
          <MoreOutlined className="flex items-center text-2xl mx-2 hover:text-blue-500" />
        </button>
      </Dropdown>
    </div>
  );
}
