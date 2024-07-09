import KeyFuturesLeft from "./components/KeyFuturesLeft";
import KeyFuturesRight from "./components/KeyFuturesRight";

export default function KeyFutures() {
    return (
        <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center lg:gap-x-11 md:gap-4 lg:mt-16 xl:px-165">
            <div className="w-full md:w-1/2 flex-shrink-0">
                <KeyFuturesLeft />
            </div>
            <KeyFuturesRight />
        </div>
    );
}
