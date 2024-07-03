import React from "react";
import TravelPointLeft from "./components/TravelPointLeft";
import TravelPointRight from "./components/TravelPointRight";

export default function TravelPoint() {
  return (
    <div className="flex w-full gap-x-[42px]">
      <div className="w-full relative">
        <TravelPointLeft />
      </div>
      <TravelPointRight />
    </div>
  );
}
