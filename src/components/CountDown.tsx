"use client"
import React, { useState, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";

const CountDown = () => {

  let difference = +new Date(`06/29/2024`) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <Countdown>
      <div className="flex flex-row list-none font-bold text-xl text-red-600 m-2 md:text-2xl lg:text-3xl"> {/* Fragment */}
        <li className="m-2" suppressHydrationWarning>
          {zeroPad(d)} <span>Days</span>
        </li>
        <li className="m-2" suppressHydrationWarning>
          {zeroPad(h)} <span>Hours</span>
        </li>
        <li className="m-2" suppressHydrationWarning>
          {zeroPad(m)} <span>Minutes</span>
        </li>
        <li className="m-2" suppressHydrationWarning>
          {zeroPad(s)} <span>Seconds</span>
        </li>
      </div>
    </Countdown>
  );
};

export default CountDown;