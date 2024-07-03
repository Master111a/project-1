import React from "react";
import StatsItem from "./StatsItem";

export default function TravelPointRight() {
  return (
    <div className="flex flex-col max-w-444">
      <div className="flex flex-col lg:gap-y-8">
        <div className="flex flex-col">
          <h2 className="text-strongTextColor text-xl lg:text-2xl uppercase leading-1.2">
            Services
          </h2>
          <h3 className="text-textDesc text-3xl lg:text-5xl leading-1.2">
            Our top value categories for you
          </h3>
        </div>
        <p className="lg:text-lg leading-1.6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <StatsItem />
        <StatsItem />
        <StatsItem />
        <StatsItem />
      </div>
    </div>
  );
}
