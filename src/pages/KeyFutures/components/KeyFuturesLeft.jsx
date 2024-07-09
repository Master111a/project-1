import location2 from "../../../assets/location2.svg";
import calendar from "../../../assets/calendar.svg";
import ticket1 from "../../../assets/ticket1.svg";

import KeyFuturesItem from "./KeyFuturesItem";
import { TextTitle } from "../../../components";
const listKeyFuture = [
    {
        icon: location2,
        title: "We offer best services",
        desc: "Lorem Ipsum is not simply random text",
        background: "bg-stats",
    },
    {
        icon: calendar,
        title: "We offer best services",
        desc: "Lorem Ipsum is not simply random text",
        background: "bg-yellowButton",
    },
    {
        icon: ticket1,
        title: "We offer best services",
        desc: "Lorem Ipsum is not simply random text",
        background: "bg-strongTextColor",
    },
];

export default function KeyFuturesLeft() {
    return (
        <div className="flex flex-col w-full gap-y-4 lg:gap-8 xl:gap-16">
            <div className="flex flex-col text-center xl:text-left gap-y-4 lg:gap-y-8">
                <div className="flex flex-col font-bold gap-y-2 lg:gap-y-4">
                    <TextTitle
                        title="Key features"
                        subtitle="We offer best services"
                    />
                </div>
                <p className="lg:text-lg leading-1.6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC.
                </p>
            </div>
            <div className="flex flex-col items-center">
                {listKeyFuture?.map((item, index) => (
                    <KeyFuturesItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}
