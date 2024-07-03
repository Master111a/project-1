import groupArrowTop from "../../assets/groupArrowTop.png";
import tripadvisor from "../../assets/tripadvisor.png";
import Expedia from "../../assets/Expedia.png";
import booking from "../../assets/booking.png";
import airbnb from "../../assets/airbnb.png";
import orbitz from "../../assets/orbitz.png";

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
            <div className="absolute left-10 flex gap-x-6 bottom-3/4 translate-y-1/2">
                <img src={groupArrowTop} alt="" className="-mt-6" />
                <img src={groupArrowTop} alt="" className="-mb-6" />
            </div>
            <div className="flex items-center w-full 2xl:px-165 justify-between py-16">
                {listSponsor?.map((item, index) => (
                    <ImageCard src={item?.src} key={index} />
                ))}
            </div>
        </div>
    );
}
