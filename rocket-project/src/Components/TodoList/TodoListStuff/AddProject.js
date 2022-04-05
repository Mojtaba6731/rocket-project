import "antd/dist/antd.css";
import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { TodosContext } from "../../../Contexts/TodosProvider";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function AddProject() {
  const { addProject } = React.useContext(TodosContext);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [projectName, setProjectName] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const ProjectNameHandler = (e) => {
    setProjectName(e.target.value);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      addProject(projectName);
      setProjectName("");
      setVisible(false);
      setLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <a
        onClick={showModal}
        className=" flex items-center  text-sm w-max h-max m-7 p-2 hover:bg-blue-400 rounded-md bg-blue-500 text-white shadow-sm "
      >
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
      </a>

      <Modal
        visible={visible}
        title="TodoList"
        width="320px"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Add" type="primary" loading={loading} onClick={handleOk}>
            Add
          </Button>,
          <Button key="submit" type="primary" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" className="w-full">
          <Input
            value={projectName}
            type="text"
            placeholder="List Name ..."
            onChange={ProjectNameHandler}
          />
        </Form>
      </Modal>
    </>
  );
}
