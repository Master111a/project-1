import React from "react";
import star from "../../../assets/star.svg";
export default function DestinationItem({ item }) {
    return (
        <div className="flex flex-col w-full rounded-t-32 shadow-card ">
            <div className="w-full aspect-square rounded-t-32 overflow-hidden">
                <img
                    src={item?.image}
                    alt="image"
                    className="w-full h-full object-cover object-center rounded-t-32"
                />
            </div>
            <div className="flex flex-col p-4 gap-4 md:p-8 md:gap-8 w-full">
                <div className="flex flex-col gap-y-2 md:gap-y-4 w-full">
                    <div className="flex w-full text-base lg:text-lg xl:text-23 font-bold leading-1.2 gap-x-1 justify-between">
                        <h4 className="text-textDesc text-left max-w-4/5 text-wrap line-clamp-1 sm:line-clamp-2">
                            {item?.name}
                        </h4>
                        <div className="text-strongTextColor">
                            ${item?.price}
                        </div>
                    </div>
                    <p className="text-textDesc/75 text-left text-sm lg:text-base xl:text-lg leading-1.2 line-clamp-1">
                        {item?.location}
                    </p>
                </div>
                <div className="flex items-center justify-start gap-x-2 text-sm lg:text-base">
                    <span>{item?.rate}</span>
                    <img src={star} alt="star" className="w-4 h-4 lg:w-fit" />
                </div>
            </div>
        </div>
    );
}
