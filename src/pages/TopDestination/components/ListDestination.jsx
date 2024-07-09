import React from "react";
import DestinationItem from "./DestinationItem";
import desImg1 from "../../../assets/desImg1.png";
import desImg2 from "../../../assets/desImg2.png";
import desImg3 from "../../../assets/desImg3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Pagination } from "swiper/modules";
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
        {
            image: desImg3,
            name: "Mountain View, Above the cloud",
            price: 150.99,
            location: "United Arab Emeries",
            rate: 4.8,
        },
        {
            image: desImg3,
            name: "Mountain View, Above the cloud",
            price: 150.99,
            location: "United Arab Emeries",
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
        <div className="lg:px-8 xl:px-165">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"> */}
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                breakpoints={{
                    440: {
                        slidesPerView: 2,
                    },

                    768: {
                        slidesPerView: 3,
                    },
                }}>
                {listDestination?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DestinationItem item={item} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </div> */}
        </div>
    );
}
