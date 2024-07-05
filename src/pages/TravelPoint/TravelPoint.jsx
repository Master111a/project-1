import React from "react";
import TravelPointLeft from "./components/TravelPointLeft";
import TravelPointRight from "./components/TravelPointRight";
export default function TravelPoint() {
    return (
        <div className="flex w-full gap-x-[42px] items-center relative xl:pr-165">
            <div className="w-full hidden lg:block">
                <TravelPointLeft />
            </div>
            <TravelPointRight />
        </div>
    );
}
