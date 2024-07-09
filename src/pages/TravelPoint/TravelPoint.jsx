import React, { useState } from "react";
import TravelPointLeft from "./components/TravelPointLeft";
import TravelPointRight from "./components/TravelPointRight";
import ScrollTrigger from "react-scroll-trigger";

export default function TravelPoint() {
    const [countOn, setCountOn] = useState(false);

    return (
        <div className="mt-4 flex flex-col sm:flex-row gap-y-8 w-full gap-x-[42px] items-center relative xl:pr-165">
            <div className="w-full lg:block">
                <TravelPointLeft />
            </div>
            <TravelPointRight />
        </div>
    );
}
