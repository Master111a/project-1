import React from "react";
import star2 from "../../../assets/star2.png";
export default function TestimonialItem({ item }) {
    return (
        <div className="flex flex-col w-full gap-y-8 lg:gap-y-16">
            <div className="flex items-center justify-center">
                <img
                    src={item?.avatar}
                    alt=""
                    className="w-16 h-16 lg:w-32 lg:h-32 rounded-full border"
                />
            </div>
            <div className="flex flex-col gap-y-8 w-full">
                <h4 className="text-textDesc/75 text-center">
                    <span className="text-stats">{item?.name}</span> /{" "}
                    {item?.work}
                </h4>
                <div className="flex items-center gap-x-4 justify-center">
                    {Array.from({ length: Math.floor(item?.rate) || 5 }).map(
                        (_, index) => (
                            <img src={star2} alt="star" key={index} />
                        )
                    )}
                </div>
                <p className="lg:text-23 leading-1.6 text-textDesc/75 text-center">
                    {item?.desc}
                </p>
            </div>
        </div>
    );
}
