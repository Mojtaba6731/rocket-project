import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="flex justify-center bg-slate-50">
      <Helmet>
        <title>About | Rocket</title>
      </Helmet>
      <div className="w-screen h-screen flex justify-center items-center py-20">
        <div className="w-sreen flex justify-center items-center bg-slate-50 px-20">
          <img
            src="./img/rocket-team.png"
            alt="rocket-team"
            className="w-3/5 h-3/5"
          />
          <div className=" flex justify-center items-center px-4 py-8 w-2/5">
            <p className="text-xl">
              About Us
              <br />
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
