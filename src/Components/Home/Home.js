import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Carousel, Timeline, Card } from "antd";
import { ClockCircleOutlined, BulbOutlined } from "@ant-design/icons";

export default function Home() {
  // this fucntions provide a handmake animation:
  const headLineTextRef = useRef();
  const headLineRocketRef = useRef();

  setTimeout(() => {
    headLineTextRef.current.classList.remove("opacity-0");
  }, 500);
  setTimeout(() => {
    headLineRocketRef.current.classList.remove("-translate-x-full");
  }, 1000);
  //

  return (
    <div className="relative flex-col items-center justify-center mb-40">
      <Helmet>
        <title>Rocket | The Creative Agency</title>
      </Helmet>

      <section
        id="#head-line"
        className="h-full lg:h-screen py-20 lg:py-0 flex flex-col lg:flex-row justify-center items-center"
      >
        <div
          ref={headLineTextRef}
          className="h-max w-max opacity-0 duration-1000 ease-in-out text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
        >
          <span className="flex space-x-4">
            <h2 className="text-gray-700">with</h2>
            <h2
              ref={headLineRocketRef}
              className="bg-gray-800 pt-0 pb-1 px-3 text-slate-50 -translate-x-full duration-1000 ease-in-out"
            >
              Rocket
            </h2>
          </span>
          <span>
            <h2 className="text-gray-700">to the universe</h2>
          </span>
        </div>
        <div className="w-4/6 lg:w-2/5">
          <img src="./img/head-line-img.jpg" alt="rocket" />
        </div>
      </section>

      <section
        id="USP"
        className="flex-col self-stretch items-center justify-center space-y-10 p-4 mb-32"
      >
        <div className="flex justify-center text-xl sm:text-2xl md:text-4xl mb-10">
          <p className="px-6 py-4 text-slate-700 border border-slate-700 md:border-0 md:bg-white md:text-slate-800">
            What Is Our Service?
          </p>
        </div>
        <Carousel dots={false} className="w-screen overflow-hidden" autoplay>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 md:w-screen h-full px-4 md:px-0">
            <div className="w-full sm:w-4/6 lg:w-2/6 flex justify-center items-center">
              <img src="./img/slider-img-1.jpg" alt="slider-img-1" />
            </div>
            <div className="w-full pr-10 lg:w-2/6 flex-col items-center justify-center">
              <div className="flex items-center">
                <div className="w-2 lg:w-4 h-56 bg-teal-400 mx-4"></div>
                <div>
                  <p className="text-2xl">What we do?</p>
                  <p className="text-base	sm:text-lg lg:text-xl">
                    We believe in the greater good, we believe in doing things
                    for the people, we believe in making their lives easier and
                    more enjoyable, we believe in businesses that keep that in
                    mind and we help them grow, by making beautifully designed
                    digital experiences, simple to use and user friendly.
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 ml-9 bg-gray-700 text-white translate hover:translate-x-4 duration-1000 ease-in-out">
                Apply Your Rocket
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 md:w-screen h-full px-4 md:px-0">
            <div className="w-full sm:w-4/6 lg:w-2/6 flex justify-center items-center">
              <img src="./img/slider-img-2.png" alt="slider-img-2" />
            </div>
            <div className="w-full pr-10 lg:w-2/6 flex-col items-center justify-center">
              <div className="flex items-center">
                <div className="w-2 lg:w-4 h-56 bg-stone-400 mx-4"></div>
                <div>
                  <p className="text-2xl">What we do?</p>
                  <p className="text-base	sm:text-lg lg:text-xl">
                    We believe in the greater good, we believe in doing things
                    for the people, we believe in making their lives easier and
                    more enjoyable, we believe in businesses that keep that in
                    mind and we help them grow, by making beautifully designed
                    digital experiences, simple to use and user friendly.
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 ml-9 bg-gray-700 text-white translate hover:translate-x-4 duration-1000 ease-in-out">
                Apply Your Rocket
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 md:w-screen h-full px-4 md:px-0">
            <div className="w-full sm:w-4/6 lg:w-2/6 flex justify-center items-center">
              <img src="./img/slider-img-3.png" alt="slider-img-3" />
            </div>
            <div className="w-full pr-10 lg:w-2/6 flex-col items-center justify-center">
              <div className="flex items-center">
                <div className="w-2 lg:w-4 h-56 bg-amber-400 mx-4"></div>
                <div>
                  <p className="text-2xl">What we do?</p>
                  <p className="text-base	sm:text-lg lg:text-xl">
                    We believe in the greater good, we believe in doing things
                    for the people, we believe in making their lives easier and
                    more enjoyable, we believe in businesses that keep that in
                    mind and we help them grow, by making beautifully designed
                    digital experiences, simple to use and user friendly.
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 ml-9 bg-gray-700 text-white translate hover:translate-x-4 duration-1000 ease-in-out">
                Apply Your Rocket
              </button>
            </div>
          </div>
        </Carousel>
      </section>

      <section
        id="key-benefits"
        className="w-screen flex-col self-stretch items-center justify-center space-y-10 px-10 sm:px-20"
      >
        <div className="flex justify-center text-xl sm:text-2xl md:text-4xl mb-10">
          <p className="px-6 py-4 text-slate-700 border border-slate-700 md:border-0 md:bg-white md:text-slate-800">
            Let's Look at Our TimeLine!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Timeline mode="alternate" className="text-gray-800 pr-8">
            <Timeline.Item
              dot={<BulbOutlined className="text-xl text-slate-500" />}
            >
              Idea of "Rocket Design Agency" started since 2017-02-07
            </Timeline.Item>
            <Timeline.Item>Start builing our project</Timeline.Item>
            <Timeline.Item color="green">
              <div className="flex shrink">
                <p>Launch The Rocket</p>
              </div>
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              <p className="text-left">Sed ut perspiciatis unde omnis.</p>
            </Timeline.Item>
            <Timeline.Item color="red">
              Network problems being solved 2017-09-01
            </Timeline.Item>
            <Timeline.Item>Create a services site 2017-11-01</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Technical testing 2018-02-01
            </Timeline.Item>
          </Timeline>
        </div>
      </section>

      <section
        id="social-proof"
        className="w-screen flex-col self-stretch items-center justify-center my-20"
      >
        <div className="flex justify-center text-xl sm:text-2xl md:text-4xl mb-10">
          <p className="px-6 py-4 text-slate-700 border border-slate-700 md:border-0 md:bg-white md:text-slate-800">
            Some of Our Latest Projects!
          </p>
        </div>

        <div className="flex flex-wrap justify-center px-4 lg:px-20">
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
          <Card
            hoverable
            className="w-64 h-48 m-4"
            cover={<img src="./img/project-img-1.jpg" alt="project-img" />}
          ></Card>
        </div>
      </section>
    </div>
  );
}
