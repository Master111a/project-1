import keyFuture1 from "../../../assets/keyFuture1.png";
import keyFuture2 from "../../../assets/keyFuture2.png";
import keyFeaturesLayer from "../../../assets/key-features.png";
import map from "../../../assets/map.png";
import { Button } from "../../../components";
export default function KeyFuturesRight() {
    return (
        <div className="relative flex flex-col w-full gap-y-6 lg:flex-row h-full mt-4 md:mt-0">
            <div className="hidden lg:block absolute top-0 -left-1 lg:translate-x-1/3 xl:translate-x-3/4 lg:-translate-y-1/4">
                <img src={keyFeaturesLayer} alt="layer" />
            </div>
            <div className="flex justify-center">
                <Button className="bg-white text-textDesc max-w-80 md:hidden w-full font-bold border border-textDesc/10 shadow-lg">
                    <span className="flex items-center justify-center gap-x-4 lg:text-23">
                        <img src={map} alt="icon" />
                        Paradise on Earth
                    </span>
                </Button>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start">
                <div className="w-fit relative z-[1] flex flex-col items-center justify-center">
                    <img
                        src={keyFuture1}
                        alt="img"
                        className="object-cover object-center rounded-full max-w-72 sm:max-w-300 md:max-w-320 xl:max-w-444 shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-7 lg:translate-x-1/4 max-w-40 md:max-w-44 lg:w-fit xl:max-w-350">
                        <img
                            src={keyFuture2}
                            alt="img"
                            className="object-cover object-center rounded-full border-8 lg:border-24 border-white shadow-md"
                        />
                    </div>
                    <Button className="hidden md:block bg-white text-textDesc absolute top-[13%] md:translate-x-12 lg:translate-x-20 xl:translate-x-[30%] right-0 z-[2] font-bold shadow-lg">
                        <span className="flex items-center gap-x-4 xl:text-23">
                            <img src={map} alt="icon" />
                            Paradise on Earth
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
