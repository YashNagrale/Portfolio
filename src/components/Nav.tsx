import React, { useEffect, useState } from "react";
import { ModeToggle, Tip } from "./index";

function Nav(): React.JSX.Element {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <nav className="border-b flex justify-between">
      <Tip text="India">
        <img
          className="w-10 border-r px-1.5"
          src="/assets/svgs/indiaFlag.svg"
          alt="India Flag"
        />
      </Tip>
      <div className="flex justify-center items-center text-md">
        <div className="flex justify-center items-center diagonal-lines">
          <p className="font-mono border-l p-2">{time.toUpperCase()}</p>
          <p className="border-r py-2 pr-1">{"(IST)"}</p>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
