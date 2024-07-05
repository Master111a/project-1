import KeyFuturesLeft from "./components/KeyFuturesLeft";
import KeyFuturesRight from "./components/KeyFuturesRight";

export default function KeyFutures() {
    return (
        <div className="flex flex-col md:flex-row lg:items-center xl:px-165 items-center lg:gap-x-11 md:gap-4 lg:mt-16">
            <div className="w-full md:max-w-364 lg:max-w-400 xl:max-w-540 grow flex-shrink-0">
                <KeyFuturesLeft />
            </div>
            <KeyFuturesRight />
        </div>
    );
}
