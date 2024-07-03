import React from "react";
import layer from "../../../assets/layer.png";
import hero1 from "../../../assets/hero1.png";
import hero2 from "../../../assets/hero2.png";
import hero3 from "../../../assets/hero3.png";
import send from "../../../assets/send.svg";
import location from "../../../assets/location.svg";
import userAdd from "../../../assets/userAdd.svg";

import { Button, ButtonIcon, ImageCard } from "../../../components";

export default function HeroRight() {
    return (
        <div className="flex flex-col lg:flex-row w-full relative justify-center lg:items-end pb-1">
            <img
                src={layer}
                alt="layer"
                className="z-0 w-full object-contain lg:absolute top-0 right-0 left-0 "
            />
            <div className="flex justify-center w-full lg:items-end z-[1] -translate-y-16 lg:translate-y-0">
                <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-auto">
                    <div className="flex flex-col gap-y-8 w-full items-center">
                        <ImageCard
                            src={hero1}
                            className="relative h-172 w-3/5 lg:h-300 lg:w-272"
                            rounded="rounded-32">
                            <ButtonIcon className="h-10 w-10 lg:h-16 lg:w-16 bg-strongTextColor absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 cursor-pointer">
                                <img
                                    src={send}
                                    alt="icon"
                                    className="w-6 h-6 lg:w-auto lg:h-auto"
                                />
                            </ButtonIcon>
                        </ImageCard>
                        <ImageCard
                            src={hero2}
                            className="relative h-172 w-3/5 lg:h-300 lg:w-272"
                            rounded="rounded-32"
                        />
                    </div>
                    <div className="flex lg:flex-col justify-center relative">
                        <ImageCard
                            src={hero3}
                            className="relative h-172 w-3/5 lg:h-400 lg:w-272"
                            rounded="rounded-32">
                            <Button className="absolute bottom-[10%] right-0 translate-x-[60%] bg-white border-white">
                                <span className="flex items-center gap-x-2">
                                    <img src={location} alt="" /> Top Places
                                </span>
                            </Button>
                            <ButtonIcon className="h-10 w-10 bg-[#FF5722] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 lg:hidden cursor-pointer">
                                <img
                                    src={userAdd}
                                    alt="layer"
                                    className="w-6 h-6 lg:w-auto lg:h-auto"
                                />
                            </ButtonIcon>
                        </ImageCard>
                        <ButtonIcon className="h-16 w-16 bg-[#FF5722] absolute hidden lg:flex bottom-0 right-1/2 cursor-pointer">
                            <img
                                src={userAdd}
                                alt="layer"
                                className="w-6 h-6 lg:w-auto lg:h-auto"
                            />
                        </ButtonIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}
