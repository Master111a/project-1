import React from "react";

export default function KeyFuturesItem({ item }) {
    return (
        <div className="p-4 lg:p-8 flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-8">
            <div
                className={`w-14 h-14 lg:w-20 lg:h-20 xl:w-25 xl:h-25 rounded-2xl lg:rounded-32 flex items-center justify-center ${item?.background} flex-shrink-0`}>
                <img
                    src={item?.icon}
                    alt="icon"
                    className="w-6 h-6 lg:w-auto lg:h-auto"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h4
                    className="text-lg lg:text-23 leading-1.2
                         font-bold">
                    {item?.title}
                </h4>
                <p className="text-base lg:text-lg leading-1.6 text-textDesc/50">
                    {item?.desc}
                </p>
            </div>
        </div>
    );
}
