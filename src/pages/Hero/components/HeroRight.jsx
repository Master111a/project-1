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
        <div className="flex flex-col xl:flex-row w-full relative justify-center lg:items-end pb-1">
            <img
                src={layer}
                alt="layer"
                className="z-0 w-full object-contain xl:absolute  top-0 right-0 left-0 "
            />
            <div className="flex justify-center w-full lg:items-end z-[1] -translate-y-16 lg:-translate-y-1/3 xl:translate-y-0">
                <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-auto">
                    <div className="flex flex-col gap-y-8 w-full items-center">
                        <ImageCard
                            src={hero1}
                            className="relative h-172 w-3/5 lg:w-44 md:h-60 lg:h-172 xl:h-300 xl:w-272"
                            rounded="rounded-32">
                            <ButtonIcon className=" animate-bounce xl:animate-none h-10 w-10 xl:h-16 xl:w-16 bg-strongTextColor absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 cursor-pointer drop-shadow-xl">
                                <img
                                    src={send}
                                    alt="icon"
                                    className="w-6 h-6 xl:w-auto xl:h-auto"
                                />
                            </ButtonIcon>
                        </ImageCard>
                        <ImageCard
                            src={hero2}
                            className="relative h-172 w-3/5 lg:w-44 md:h-60 lg:h-172 xl:h-300 xl:w-272"
                            rounded="rounded-32"
                        />
                    </div>
                    <div className="flex lg:flex-col justify-center relative">
                        <ImageCard
                            src={hero3}
                            className="relative h-172 w-3/5 lg:w-44 md:h-60 xl:h-400 xl:w-272"
                            rounded="rounded-32">
                            <Button className="absolute bottom-[10%] right-0 translate-x-[60%] bg-white border-white hidden xl:block">
                                <span className="flex items-center gap-x-2">
                                    <img src={location} alt="" /> Top Places
                                </span>
                            </Button>
                            <ButtonIcon className="animate-bounce h-10 w-10 bg-white absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer xl:hidden drop-shadow-xl">
                                <img
                                    src={location}
                                    alt="location"
                                    className="w-6 h-6 lg:w-auto lg:h-auto"
                                />
                            </ButtonIcon>
                            <ButtonIcon className="animate-bounce h-10 w-10 bg-stats absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 lg:hidden cursor-pointe drop-shadow-xlr">
                                <img
                                    src={userAdd}
                                    alt="layer"
                                    className="w-6 h-6 lg:w-auto lg:h-auto"
                                />
                            </ButtonIcon>
                        </ImageCard>
                        <ButtonIcon className="animate-bounce lg:w-10 lg:h-10 xl:h-16 xl:w-16 bg-[#FF5722] absolute hidden lg:flex bottom-0 right-1/2 cursor-pointer drop-shadow-xl">
                            <img
                                src={userAdd}
                                alt="layer"
                                className="w-6 h-6 xl:w-auto xl:h-auto"
                            />
                        </ButtonIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}
