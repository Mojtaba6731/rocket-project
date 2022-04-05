import React from "react";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <div className="flex justify-center bg-slate-50">
      <Helmet>
        <title>Blog | Rocket</title>
      </Helmet>
      {/* <div className="w-3/5 mt-10 mb-20 py-8 shadow-lg flex justify-center bg-white "> */}
      <div className="w-screen h-screen flex justify-center items-center py-20">
        <div className="grid items-center px-12 py-8 shadow-sm bg-slate-500">
          <p className="text-3xl text-white"> It will be added soon...</p>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
}
