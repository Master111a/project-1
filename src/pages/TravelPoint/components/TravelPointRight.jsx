import React from "react";
import StatsItem from "./StatsItem";
import { ButtonIcon } from "../../../components";
import ticketStar from "../../../assets/ticketStar.svg";

const statsList = [
    {
        stats: "500+",
        name: "Holiday Package",
    },
    {
        stats: "100",
        name: "Luxury Hotel",
    },
    {
        stats: "7",
        name: "Premium Airlines",
    },
    {
        stats: "2k+",
        name: "Happy Customer",
    },
];
export default function TravelPointRight() {
    return (
        <div className="flex flex-col max-w-444 lg:gap-16 relative">
            <div className="flex flex-col lg:gap-y-8">
                <div className="flex flex-col font-bold gap-y-4">
                    <h2 className="text-strongTextColor text-xl lg:text-2xl uppercase leading-1.2">
                        Travel Point
                    </h2>
                    <h3 className="text-textDesc text-3xl lg:text-44 leading-1.2">
                        We helping you find your dream location
                    </h3>
                </div>
                <p className="lg:text-lg leading-1.6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {statsList?.map((item, index) => (
                    <StatsItem item={item} key={index} />
                ))}
            </div>
            <ButtonIcon className="h-10 w-10 lg:h-16 lg:w-16 bg-yellowButton absolute top-1/2 right-0 translate-x-2/3 -translate-y-1/2 cursor-pointer">
                <img src={ticketStar} alt="icon" className="w-6 h-6 lg:w-12" />
            </ButtonIcon>
        </div>
    );
}
