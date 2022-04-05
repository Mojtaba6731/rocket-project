import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "antd";

export default function SlotMachine() {
  const [slotNumbers, setSlotNumbers] = useState([]);
  const [message, setMessage] = useState("");
  const [userPoint, setUserPoint] = useState(1000);
  const slotOneRef = useRef();
  const slotTwoRef = useRef();
  const slotThreeRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      compareSlots();
    }, 2300);
  }, [slotNumbers]);

  const startslotMachine = () => {
    if (userPoint < 200) {
      setMessage("Sorry, you have not enough Coins!(atleast 200)");
      setSlotNumbers([]);
      setTimeout(() => {
        setMessage("buy some Coins and get back, maybe win next time:)");
      }, 2350);

      return;
    }
    setMessage("");
    slotsAnimation();
    makeNewNumbers();
  };

  const makeNewNumbers = () => {
    setTimeout(() => {
      setSlotNumbers([
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ]);
    }, 1000);
  };

  const compareSlots = () => {
    if (slotNumbers[0] === undefined) {
      setMessage("Try Your Chance");
      return;
    }
    if (
      slotNumbers[0] === slotNumbers[1] &&
      slotNumbers[1] === slotNumbers[2]
    ) {
      setMessage("congratulation! You Get 500 Coins Reward!");
      setUserPoint(userPoint + 500);
    } else if (
      slotNumbers[0] === slotNumbers[1] ||
      slotNumbers[0] === slotNumbers[2] ||
      slotNumbers[1] === slotNumbers[2]
    ) {
      setMessage("you was close, only 100 Coins lost.");
      setUserPoint(userPoint - 100);
    } else if (
      !(slotNumbers[0] === slotNumbers[1] && slotNumbers[1] === slotNumbers[2])
    ) {
      setMessage("Oops, you lost, so lose 200 coins ");
      setUserPoint(userPoint - 200);
    }
  };

  const slotsAnimation = () => {
    //animation of Hide
    slotOneRef.current.classList.add("opacity-0");
    slotTwoRef.current.classList.add("opacity-0");
    slotThreeRef.current.classList.add("opacity-0");

    //animation of Show
    setTimeout(() => {
      slotOneRef.current.classList.remove("opacity-0");
    }, 1500);
    setTimeout(() => {
      slotTwoRef.current.classList.remove("opacity-0");
    }, 2000);
    setTimeout(() => {
      slotThreeRef.current.classList.remove("opacity-0");
    }, 2500);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <Helmet>
        <title>Slot-Machine | Rocket</title>
      </Helmet>
      <div className="relative w-3/5 mt-10 mb-20 py-8 px-4 bg-white shadow-lg flex-col justify-center space-y-10">
        <div className="absolute text-2xl ring-2 ring-slate-300 text-orange-500 px-2 py-1 left-12">
          Coins: {userPoint}
        </div>
        <div className="flex justify-center items-center space-x-6">
          <div
            ref={slotOneRef}
            className="w-20 h-28 text-4xl ring-1 ring-slate-300 flex justify-center items-center duration-1000 ease-in-out"
          >
            {slotNumbers[0]}
          </div>
          <div
            ref={slotTwoRef}
            className="w-20 h-28 text-4xl ring-1 ring-slate-300 flex justify-center items-center duration-1000 ease-in-out"
          >
            {slotNumbers[1]}
          </div>
          <div
            ref={slotThreeRef}
            className="w-20 h-28 text-4xl ring-1 ring-slate-300 flex justify-center items-center duration-1000 ease-in-out"
          >
            {slotNumbers[2]}
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Button onClick={startslotMachine}>Click it</Button>
          {/* <Button onClick={numberOfSLotMachine}>List</Button> */}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-base w-3/6 h-10 px-4 py-2 ring-2 ring-slate-300 flex justify-center items-center duration-1000 ease-in-out">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
