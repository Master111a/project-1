import { ServiceItem, TextTitle } from "../../components";
import destination_1 from "../../assets/destination_1.png";
import booking_1 from "../../assets/booking_1.png";
import cloudy1 from "../../assets/cloudy1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Pagination } from "swiper/modules";
export default function Service() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const listService = [
        {
            src: destination_1,
            title: "Best Tour Guide",
            description:
                "What looked like a small patch of purple grass, above five feet.",
        },
        {
            src: booking_1,
            title: "Easy Booking",
            description:
                "Square, was moving across the sand in their direction.",
        },
        {
            src: cloudy1,
            title: "Weather Forecast",
            description:
                "What looked like a small patch of purple grass, above five feet.",
        },
        {
            src: booking_1,
            title: "Easy Booking",
            description:
                "Square, was moving across the sand in their direction.",
        },
        {
            src: cloudy1,
            title: "Weather Forecast",
            description:
                "What looked like a small patch of purple grass, above five feet.",
        },
    ];
    return (
        <div className="flex flex-col gap-y-4 md:gap-y-8 md:flex-row md:items-center xl:pl-165 w-full overflow-hidden mt-6 md:mt-0">
            <div className="font-bold text-center md:text-left w-full md:w-2/5 md:max-w-444 flex-shrink-0">
                <TextTitle
                    title="Services"
                    subtitle="Our top value categories for you"
                />
            </div>
            <div className="flex lg:flex-shink-0 gap-x-5 py-2 w-full md:w-3/5">
                <Swiper
                    slidesPerView={1}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    breakpoints={{
                        440: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    className="service">
                    {listService?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ServiceItem item={item} key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
