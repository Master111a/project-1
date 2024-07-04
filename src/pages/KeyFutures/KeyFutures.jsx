import KeyFuturesLeft from "./components/KeyFuturesLeft";
import KeyFuturesRight from "./components/KeyFuturesRight";

export default function KeyFutures() {
    return (
        <div className="flex lg:items-center lg:px-165 items-center lg:gap-x-11 lg:mt-16">
            <div className="w-full lg:max-w-540 grow flex-shrink-0">
                <KeyFuturesLeft />
            </div>
            <KeyFuturesRight />
        </div>
    );
}
