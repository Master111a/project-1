import React from "react";

export default function TextTitle({ title, subtitle }) {
    return (
        <>
            <h2 className="text-strongTextColor text-base md:text-lg lg:text-xl xl:text-23 uppercase !leading-1.2">
                {title}
            </h2>
            <h3 className="text-textDesc text-xl md:text-2xl lg:text-3xl xl:text-5xl !leading-1.2">
                {subtitle}
            </h3>
        </>
    );
}
