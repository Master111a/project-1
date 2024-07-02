import React from "react";
import { Button } from "../../../components";
import work from "../../../assets/work.svg";
import playCircle from "../../../assets/play-circle.svg";
export default function HeroLeft() {
  return (
    <div className="flex flex-col max-w-[430px]">
      <Button className="bg-transparent text-strongTextColor">
        <span className="flex flex-nowrap gap-x-4 text-sm">
          Explore the world! <img src={work} alt="icon" />
        </span>
      </Button>
      <h1 className="text-[69px] leading-[1.2] text-left text-wrap">
        Travel <strong className="text-strongTextColor">top destination</strong>{" "}
        of the world
      </h1>
      <p className="text-lg leading-[1.6] text-textDesc/50">
        We always make our customer happy by providing as many choices as
        possible
      </p>
      <div className="flex items-center">
        <Button
          className="text-white bg-buttonColor shadow-dropShadow3"
          title="Get Started"
        />
        <Button className="bg-transparent text-textLinkColor ">
          <span className="flex flex-nowrap gap-x-4 text-sm cursor-pointer">
            <img src={playCircle} alt="icon" /> Watch Demo
          </span>
        </Button>
      </div>
    </div>
  );
}
