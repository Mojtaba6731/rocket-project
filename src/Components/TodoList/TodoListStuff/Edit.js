import "antd/dist/antd.css";
import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { TodosContext } from "../../../Contexts/TodosProvider";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function Edit({ todo }) {
  const { editTodo } = React.useContext(TodosContext);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const [editedTodoText, setEditedTodoText] = useState(todo.text + "");

  const showModal = () => {
    setVisible(true);
  };

  const todoTextHandler = (e) => {
    setEditedTodoText(e.target.value);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      editTodo(todo, editedTodoText);
      setEditedTodoText(todo.text + editedTodoText);
      setVisible(false);
      setLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="mr-3 p-1 w-max  hover:text-orange-500 rounded-md  text-sm leading-6 text-slate-400 font-medium"
      >
        <EditOutlined className="text-lg" />
      </button>

      <Modal
        visible={visible}
        title="Edit Todo"
        width="480px"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="update"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Update
          </Button>,
          <Button key="cancel" type="primary" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" className="w-full">
          <Input
            value={editedTodoText}
            type="text"
            placeholder={todo.text}
            onChange={todoTextHandler}
          />
        </Form>
      </Modal>
    </>
  );
}
