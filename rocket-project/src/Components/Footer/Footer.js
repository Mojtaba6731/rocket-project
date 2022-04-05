import React from "react";
import "antd/dist/antd.css";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  GoogleOutlined,
  RocketOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="relative min-h-72 flex flex-col lg:flex-row justify-center items-center lg:justify-between bg-gray-800 px-2 sm:px-0">
      {/* ----Back_Top--- */}
      <div className="absolute left-1/2 bottom-full w-max p-2 -my-5 bg-white rounded-full hover:-translate-y-1 duration-1000 ease-in-out">
        <a href="#" className="text-gray-800 text-4xl">
          <RocketOutlined />
        </a>
      </div>
      {/*---About_Us---*/}
      <div className="sm:w-96 h-5/6 flex items-center m-10">
        <div>
          <p className=" text-lg font-medium text-slate-200">Who we Are?</p>
          <p className="text-base text-slate-300">
            We believe in the greater good, we believe in doing things for the
            people, we believe in making their lives easier and more enjoyable,
            we believe in businesses that keep that in mind and we help them
            grow, by making beautifully designed digital experiences, simple to
            use and user friendly.
          </p>
        </div>
      </div>
      {/*---Social_Media---*/}
      <div className="xl:w-2/6 flex justify-center items-center text-3xl">
        <a className="flex items-center mx-4 text-gray-100 hover:text-gray-600">
          <GoogleOutlined />
        </a>
        <a className="flex items-center mx-4 text-gray-100 hover:text-gray-600">
          <InstagramOutlined />
        </a>
        <a className="flex items-center mx-4 text-gray-100 hover:text-gray-600">
          <GithubOutlined />
        </a>
        <a className="flex items-center mx-4 text-gray-100 hover:text-gray-600">
          <LinkedinOutlined />
        </a>
        <a className="flex items-center mx-4 text-gray-100 hover:text-gray-600">
          <MailOutlined />
        </a>
      </div>

      {/*---Links---*/}
      <div className="xl:w-1/6 flex flex-row lg:flex-col lg:space-y-4 xl:-mr-16 xl:ml-52 m-10 text-xl ">
        <a className="flex items-center mx-2 sm:mx-4 text-gray-100 hover:text-gray-600">
          <RightOutlined className="text-xs mr-2" />
          Rocket
        </a>
        <a className="flex items-center mx-2 sm:mx-4 text-gray-100 hover:text-gray-600">
          <RightOutlined className="text-xs mr-2" />
          TodoList
        </a>
        <a className="flex items-center mx-2 sm:mx-4 text-gray-100 hover:text-gray-600">
          <RightOutlined className="text-xs mr-2" />
          FAQ
        </a>
        <a className="flex items-center mx-2 sm:mx-4 text-gray-100 hover:text-gray-600">
          <RightOutlined className="text-xs mr-2" />
          Blog
        </a>
      </div>
    </div>
  );
}
