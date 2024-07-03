import React from "react";
import sixX from "../../assets/sixX.png";

export default function TravelPoint() {
    return (
        <div className="flex flex-col">
            <div className="w-full relative">
                <img
                    src={sixX}
                    alt="icon"
                    className="absolute right-0 bottom-0 translate-y-2/3 -translate-x-1/3"
                />
            </div>
        </div>
    );
}