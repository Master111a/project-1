import React from "react";
import { Button } from "../../../components";
import work from "../../../assets/work.svg";
import playCircle from "../../../assets/play-circle.svg";
export default function HeroLeft() {
    return (
        <div className="flex w-full items-center">
            <div className="flex flex-col gap-y-6 lg:gap-y-11 h-auto">
                <div className="flex items-center ">
                    <Button className="bg-white text-strongTextColor w-auto hover:bg-strongTextColor hover:text-white">
                        <span className="flex items-center gap-x-4 text-sm">
                            Explore the world!{" "}
                            <img
                                src={work}
                                alt="icon"
                                className="hover:text-white"
                            />
                        </span>
                    </Button>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-69 leading-1.2 text-left text-wrap font-bold">
                    Travel{" "}
                    <span className="text-strongTextColor">
                        top destination
                    </span>{" "}
                    of the world
                </h1>
                <p className="text-base lg:text-lg leading-[1.6] text-textDesc/50 text-justify">
                    We always make our customer happy by providing as many
                    choices as possible
                </p>
                <div className="flex items-center">
                    <Button
                        className="text-white bg-buttonColor drop-shadow-3"
                        title="Get Started"
                    />
                    <Button className="bg-transparent text-textLinkColor border-[#eeeeee] border">
                        <span className="flex flex-nowrap gap-x-2 lg:gap-x-4 text-sm cursor-pointer">
                            <img src={playCircle} alt="icon" /> Watch Demo
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
