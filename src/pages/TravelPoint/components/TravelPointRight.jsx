import StatsItem from "./StatsItem";
import { ButtonIcon, TextTitle } from "../../../components";
import ticketStar from "../../../assets/ticketStar.svg";
const statsList = [
    {
        stats: "500+",
        name: "Holiday Package",
    },
    {
        stats: "100",
        name: "Luxury Hotel",
    },
    {
        stats: "7",
        name: "Premium Airlines",
    },
    {
        stats: "2k+",
        name: "Happy Customer",
    },
];
export default function TravelPointRight() {
    return (
        <div className="flex flex-col w-full lg:max-w-444 gap-6 md:gap-8 lg:gap-12 xl:gap-16 relative">
            <div className="flex flex-col text-center xl:text-left gap-y-4 lg:gap-y-8">
                <div className="flex flex-col font-bold gap-y-2 lg:gap-y-4">
                    <TextTitle
                        title="Travel Point"
                        subtitle="We helping you find your dream location"
                    />
                </div>
                <p className="sm:text-sm md:text-base lg:text-lg leading-1.6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
                {statsList?.map((item, index) => (
                    <StatsItem item={item} key={index} />
                ))}
            </div>

            <ButtonIcon className="h-10 w-10 lg:h-16 lg:w-16 animate-wiggle lg:animate-none bg-yellowButton absolute top-1/3 md:top-1/2 right-0 translate-x-1/3 xl:translate-x-2/3 md:-translate-y-2/3 xl:-translate-y-1/2 cursor-pointer">
                <img src={ticketStar} alt="icon" className="w-6 h-6 lg:w-12" />
            </ButtonIcon>
        </div>
    );
}
