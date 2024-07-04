import { ButtonIcon } from "../../components";
import TestimonialItem from "./components/TestimonialItem";
import arrowLeft1 from "../../assets/arrow-left1.svg";
import arrowRight from "../../assets/arrow-right.svg";
import avatar from "../../assets/avatar.png";
import layer2 from "../../assets/layer2.png";

import { useState } from "react";
export default function Testimonials() {
    const listTestimonial = [
        {
            avatar: avatar,
            name: "Mark Smith",
            work: "Travel Enthusiast",
            rate: 4.8,
            desc: "Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literature from 45 BC.",
        },
        {
            avatar: avatar,
            name: "Mark Smith",
            work: "Travel Enthusiast",
            rate: 3.1,
            desc: "Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literature from 45 BC.",
        },
        {
            avatar: avatar,
            name: "Mark Smith",
            work: "Travel Enthusiast",
            rate: 5,
            desc: "Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literature from 45 BC.",
        },
    ];
    const [active, setActive] = useState(1);
    const onNext = () => {
        if (active < listTestimonial?.length - 1) {
            setActive((pre) => pre + 1);
        } else {
            setActive(0);
        }
    };
    const onBack = () => {
        if (active > 0) {
            setActive((pre) => pre - 1);
        } else {
            setActive(listTestimonial?.length - 1);
        }
    };
    return (
        <div className="w-full h-fit relative">
            <img
                src={layer2}
                alt="layer"
                className="absolute top-1/2 right-0 left-0 -translate-y-1/2 z-0"
            />
            <div className="flex items-center w-full justify-between lg:px-40 mt-16 z-[1] relative">
                <ButtonIcon
                    className="group bg-white border border-textDesc/10 w-25 h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50 flex-shrink-0"
                    onClick={onBack}>
                    <img
                        src={arrowLeft1}
                        alt=""
                        className="filter transition duration-150 group-hover:filter-invert"
                    />
                </ButtonIcon>
                <div className="flex flex-col gap-y-16">
                    <div className="flex flex-col font-bold gap-y-4 text-center w-full">
                        <h2 className="text-strongTextColor text-xl lg:text-2xl uppercase leading-1.2">
                            Testimonials
                        </h2>
                        <h3 className="text-textDesc text-3xl lg:text-44 leading-1.2">
                            Trust our clients
                        </h3>
                    </div>

                    <TestimonialItem item={listTestimonial[active]} />
                    <div className="w-full flex items-center justify-center gap-x-6">
                        {Array.from({
                            length: Math.floor(listTestimonial?.length) || 3,
                        }).map((_, index) => (
                            <div
                                className={`w-6 h-6 rounded-full cursor-pointer hover:bg-strongTextColor ${
                                    index === active
                                        ? "bg-strongTextColor"
                                        : "bg-textDesc/5"
                                }`}
                                key={index}
                                onClick={() => setActive(index)}></div>
                        ))}
                    </div>
                </div>
                <ButtonIcon
                    className="group bg-white border border-textDesc/10 w-25 h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50 flex-shrink-0"
                    onClick={onNext}>
                    <img
                        src={arrowRight}
                        alt=""
                        className="filter transition duration-150 group-hover:filter-invert"
                    />
                </ButtonIcon>
            </div>
        </div>
    );
}
