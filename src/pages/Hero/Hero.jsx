import { useState } from "react";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

export default function Hero() {
    const [show, setShow] = useState(false);
    return (
        <div className="xl:pl-40">
            <div className="relative flex flex-col gap-y-8 lg:flex-row lg:justify-between z-[1] h-auto xl:min-h-713 w-full 2xl:max-w-2xl gap-x-2">
                <div className="flex h-auto w-full lg:max-w-430 items-center">
                    <HeroLeft onClick={() => setShow(true)} />
                </div>
                <HeroRight />
            </div>
            {show && (
                <div
                    className="fixed top-0 bottom-0 left-0 right-0 bg-textDesc/60 z-30 flex items-center justify-center"
                    onClick={() => setShow(false)}>
                    <div
                        className="w-fit z-50 bg-white rounded-md overflow-hidden"
                        onClick={(e) => {
                            e.stopPropagation;
                        }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/LUyAv6jFbAM?si=RRKbzwwRObTcq46q&autoplay=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
