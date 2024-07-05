import CountUp from "react-countup";
import { extractNumbers, extractValues } from "../../../utils/function";
export default function StatsItem({ item }) {
    return (
        <div className="flex flex-col gap-y-4 p-8 border border-textDesc/10 rounded-32">
            <h5 className="text-stats text-35 leading-1.2 font-bold text-center">
                <CountUp
                    start={0}
                    end={extractNumbers(item?.stats)}
                    duration={2}
                    delay={0}
                />
                {extractValues(item?.stats)}
            </h5>
            <p className="text-center text-textDesc text-lg leading-1.6">
                {item?.name}
            </p>
        </div>
    );
}
