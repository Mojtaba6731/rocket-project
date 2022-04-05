import React from "react";
import { TodosContext } from "../../../Contexts/TodosProvider";
import { Tabs, Space } from "antd";
import AddProject from "./AddProject";

const { TabPane } = Tabs;

export default function ProjectsNav() {
  const { projects, setSelectedProjectId } = React.useContext(TodosContext);

  var currentTabPosition = "left";
  if (window.innerWidth < 640) {
    currentTabPosition = "top";
  }

  const callback = (key) => {
    setSelectedProjectId(parseInt(key));
  };

  return (
    <div className="flex justify-center">
      <div className="w-full h-full">
        <Space style={{ marginBottom: 24 }}></Space>
        <Tabs
          tabPosition={currentTabPosition}
          onTabClick={callback}
          tabBarExtraContent={<AddProject />}
        >
          <TabPane tab="sample" key={19970925}></TabPane>
          {projects.map((project) => (
            <TabPane tab={project.title} key={project.id}></TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
