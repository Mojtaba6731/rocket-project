import React from "react";
import TodosProvider from "../../Contexts/TodosProvider";
import { Helmet } from "react-helmet";
import ProjectsNav from "./TodoListStuff/ProjectsNav";
import Form from "./TodoListStuff/Form";
import List from "./TodoListStuff/List";

export default function TodoList() {
  return (
    <TodosProvider>
      <Helmet>
        <title>TodoList | Rocket</title>
      </Helmet>
      <div className="min-h-screen max-h-full w-screen flex justify-center bg-slate-50">
        <div className="w-full lg:w-4/5 xl:w-3/5 mt-10 mb-20 px-4 sm:py-8 shadow-lg flex flex-col sm:flex-row sm:justify-center bg-white">
          <ProjectsNav />
          <div className="w-full felx-col items-center box-border">
            <Form />
            <List />
          </div>
        </div>
      </div>
    </TodosProvider>
  );
}
