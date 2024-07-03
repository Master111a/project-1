import React from "react";
import travelImg from "../../../assets/travelImg.png";
import discount from "../../../assets/discount.svg";
import { Button } from "../../../components";

export default function TravelPointLeft() {
  return (
    <div className="w-full h-auto relative">
      <img src={travelImg} alt="" />
      <div className="flex absolute right-0 top-1/4 -translate-y-[60%]">
        <Button className="bg-white">
          <span className="flex items-center gap-x-4 text-23">
            <img
              src={discount}
              alt="icon"
              className="fill-pink group-hover-fill-white"
            />
            Discounted Price
          </span>
        </Button>
      </div>
    </div>
  );
}
