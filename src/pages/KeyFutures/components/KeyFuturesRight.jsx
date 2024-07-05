import keyFuture1 from "../../../assets/keyFuture1.png";
import keyFuture2 from "../../../assets/keyFuture2.png";
import keyFeaturesLayer from "../../../assets/key-features.png";
import map from "../../../assets/map.png";
import { Button } from "../../../components";
export default function KeyFuturesRight() {
    return (
        <div className="relative flex flex-col gap-y-4 lg:flex-row grow h-full mt-4 lg:mt-0">
            <div className="hidden lg:block absolute top-0 -left-1 translate-x-3/4 -translate-y-1/4">
                <img src={keyFeaturesLayer} alt="layer" />
            </div>
            <div className="flex justify-center">
                <Button className="bg-white text-textDesc max-w-80 md:hidden w-full font-bold">
                    <span className="flex items-center justify-center gap-x-4 lg:text-23">
                        <img src={map} alt="icon" />
                        Paradise on Earth
                    </span>
                </Button>
            </div>
            <div className="w-fit relative z-[1] flex flex-col">
                <img
                    src={keyFuture1}
                    alt="img"
                    className="object-cover object-center rounded-full lg:max-w-444"
                />
                <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-3 lg:translate-x-1/4 max-w-60 lg:w-fit lg:max-w-[350px]">
                    <img
                        src={keyFuture2}
                        alt="img"
                        className="object-cover object-center rounded-full border-8 lg:border-[24px] border-white"
                    />
                </div>
                <Button className="hidden md:block bg-white text-textDesc absolute top-[13%] lg:translate-x-[30%] right-0 z-[2] font-bold">
                    <span className="flex items-center gap-x-4 lg:text-23">
                        <img src={map} alt="icon" />
                        Paradise on Earth
                    </span>
                </Button>
            </div>
        </div>
    );
}
