import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { extractNumbers, extractValues } from "../../../utils/function";
import ScrollTrigger from "react-scroll-trigger";
export default function StatsItem({ item }) {
    const [countOn, setCountOn] = useState(false);
    const ref = useRef(null);
    return (
        <div className="flex flex-col gap-y-4 p-6 md:p-8 border border-textDesc/10 rounded-32 shadow-md">
            <h5 className="text-stats text-xl sm:text-23 md:text-3xl xl:text-35 leading-1.2 font-bold text-center">
                <ScrollTrigger
                    onEnter={() => setCountOn(true)}
                    onExit={() => setCountOn(false)}>
                    {countOn && (
                        <>
                            <CountUp
                                start={0}
                                end={extractNumbers(item?.stats)}
                                duration={2}
                                delay={0}
                                ref={ref.current}
                            />
                            {extractValues(item?.stats)}
                        </>
                    )}
                </ScrollTrigger>
            </h5>
            <p className="text-center text-textDesc text-sm md:textbase xl:text-lg leading-1.6">
                {item?.name}
            </p>
        </div>
    );
}
