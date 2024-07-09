import React from "react";
import travelImg from "../../../assets/travelImg.png";
import discount from "../../../assets/discount.svg";
import { Button } from "../../../components";

export default function TravelPointLeft() {
    return (
        <div className="relative w-fit">
            <img src={travelImg} alt="img" />
            <div className="flex absolute right-0 top-1/4 -translate-y-[60%] animate-wiggle">
                <Button className="bg-white px-2">
                    <span className="flex items-center gap-x-4 xl:text-23">
                        <img
                            src={discount}
                            alt="icon"
                            className="w-6 h-6 fill-pink group-hover-fill-white"
                        />
                        <span className="hidden lg:inline">
                            Discounted Price
                        </span>
                    </span>
                </Button>
            </div>
        </div>
    );
}
