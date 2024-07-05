import { ServiceItem } from "../../components";
import destination_1 from "../../assets/destination_1.png";
import booking_1 from "../../assets/booking_1.png";
import cloudy1 from "../../assets/cloudy1.png";

export default function Service() {
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
    ];
    return (
        <div className="flex flex-col gap-y-4 lg:gap-y-8 xl:flex-row xl:items-center xl:px-165 overflow-hidden">
            <div className="font-bold text-center xl:text-left w-full xl:max-w-444 grow flex-shrink-0">
                <h2 className="text-strongTextColor text-lg lg:text-xl xl:text-23 uppercase leading-1.2">
                    Services
                </h2>
                <h3 className="text-textDesc text-2xl lg:text-3xl xl:text-5xl leading-1.2">
                    Our top value categories for you
                </h3>
            </div>
            <div className="flex flex-col md:flex-row xl:grow-[2] gap-x-5">
                {listService?.map((item, index) => (
                    <ServiceItem
                        item={item}
                        key={index}
                        active={index === 1 ? true : false}
                    />
                ))}
            </div>
        </div>
    );
}
