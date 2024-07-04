import keyFuture1 from "../../../assets/keyFuture1.png";
import keyFuture2 from "../../../assets/keyFuture2.png";
import keyFeaturesLayer from "../../../assets/key-features.png";
import map from "../../../assets/map.png";
import { Button } from "../../../components";
export default function KeyFuturesRight() {
    return (
        <div className="relative flex grow h-full">
            <div className="absolute top-0 -left-1 translate-x-3/4 -translate-y-1/4">
                <img src={keyFeaturesLayer} alt="layer" />
            </div>
            <div className="w-fit relative z-[1]">
                <img
                    src={keyFuture1}
                    alt="img"
                    className="object-cover object-center rounded-full max-w-444"
                />
                <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/4 w-fit max-w-[350px]">
                    <img
                        src={keyFuture2}
                        alt="img"
                        className="object-cover object-center rounded-full border-[24px] border-white"
                    />
                </div>
                <Button className="bg-white text-textDesc absolute top-[13%] translate-x-[30%] right-0 z-[2]">
                    <span className="flex items-center gap-x-4 lg:text-23">
                        <img src={map} alt="icon" />
                        Paradise on Earth
                    </span>
                </Button>
            </div>
        </div>
    );
}
