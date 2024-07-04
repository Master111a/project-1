import React from "react";
import DestinationItem from "./DestinationItem";
import desImg1 from "../../../assets/desImg1.png";
import desImg2 from "../../../assets/desImg2.png";
import desImg3 from "../../../assets/desImg3.png";
export default function ListDestination() {
    const listDestination = [
        {
            image: desImg1,
            name: "Paradise Beach, Bantayan Island",
            price: 550.16,
            location: "Rome, Italy",
            rate: 4.8,
        },
        {
            image: desImg2,
            name: "Ocean with full of Colors",
            price: 20.99,
            location: "Maldives",
            rate: 4.8,
        },
        {
            image: desImg3,
            name: "Mountain View, Above the cloud",
            price: 150.99,
            location: "United Arab Emeries",
            rate: 4.8,
        },
    ];
    return (
        <div className="lg:px-165">
            <div className="grid grid-cols-3 gap-x-8">
                {listDestination?.map((item, index) => (
                    <DestinationItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
