import React from "react";

export default function KeyFuturesItem({ item }) {
    return (
        <div className="p-8 flex items-center gap-x-8">
            <div
                className={`w-25 h-25 rounded-32 flex items-center justify-center ${item?.background}`}>
                <img src={item?.icon} alt="icon" className="" />
            </div>
            <div className="flex flex-col justify-center">
                <h4
                    className="text-2xl lead2.
                         font-bold">
                    {item?.title}
                </h4>
                <p className="text-lg leading-1.6 text-textDesc/50">
                    {item?.desc}
                </p>
            </div>
        </div>
    );
}
