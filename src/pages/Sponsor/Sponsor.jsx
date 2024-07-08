import groupArrowTop from "../../assets/groupArrowTop.png";
import tripadvisor from "../../assets/tripadvisor.png";
import Expedia from "../../assets/Expedia.png";
import booking from "../../assets/booking.png";
import airbnb from "../../assets/airbnb.png";
import orbitz from "../../assets/orbitz.png";
import Marquee from "react-fast-marquee";
import { ImageCard } from "../../components";
const listSponsor = [
    {
        src: tripadvisor,
        href: "",
    },
    {
        src: Expedia,
        href: "",
    },
    {
        src: booking,
        href: "",
    },
    {
        src: airbnb,
        href: "",
    },
    {
        src: orbitz,
        href: "",
    },
];
export default function Sponsor() {
    return (
        <div className="w-full relative z-[1]">
            <div className="hidden lg:flex absolute left-0 xl:left-10 gap-x-6 bottom-3/4 xl:translate-y-1/2 h-10 xl:h-auto">
                <img src={groupArrowTop} alt="" className="-mt-6" />
                <img src={groupArrowTop} alt="" className="-mb-6" />
            </div>
            <div className="w-full 2xl:px-165 lg:py-8 xl:py-16">
                <Marquee className="w-full flex items-center justify-center lg:justify-between gap-4">
                    {listSponsor?.map((item, index) => (
                        <ImageCard
                            src={item?.src}
                            key={index}
                            className="px-4 lg:px-8"
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
