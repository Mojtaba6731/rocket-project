import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="flex justify-center bg-slate-50">
      <Helmet>
        <title>About | Rocket</title>
      </Helmet>
      <div className="w-screen h-screen flex justify-center items-center py-20">
        <div className="w-sreen flex flex-col lg:flex-row justify-center items-center bg-slate-50 px-4 lg:px-20">
          <img
            src="./img/rocket-team.png"
            alt="rocket-team"
            className="w-full sm:w-4/5 md:w-3/5 h-3/5"
          />
          <div className=" flex justify-center items-center mb-8 sm:mb-12 md:mb-24 px-4 py-8 w-full sm:w-4/5 lg:w-2/5">
            <p className="font-normal text-sm md:text-base lg:text-xl">
              <h4>About Us</h4>
              We believe in the greater good, we believe in doing things for the
              people, we believe in making their lives easier and more
              enjoyable, we believe in businesses that keep that in mind and we
              help them grow, by making beautifully designed digital
              experiences, simple to use and user friendly.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
}
