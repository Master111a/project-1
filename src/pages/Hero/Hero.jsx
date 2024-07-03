import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

export default function Hero() {
    return (
        <div className="lg:pl-40">
            <div className="relative flex flex-col lg:flex-row lg:justify-between z-[1] h-auto lg:min-h-713 w-full 2xl:max-w-2xl">
                <div className="flex h-auto w-full lg:max-w-430 items-center">
                    <HeroLeft />
                </div>
                <HeroRight />
            </div>
        </div>
    );
}
