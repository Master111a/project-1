import arrowLeft1 from "../../../assets/arrow-left1.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import { ButtonIcon, TextTitle } from "../../../components";
export default function HeadDestination() {
    return (
        <div className="flex flex-row items-center justify-between gap-y-4 p-4 lg:p-8 xl:py-16 xl:px-165">
            <div className="font-bold text-center lg:text-left w-full">
                <TextTitle
                    title="Top Destination"
                    subtitle="Explore top destination"
                />
            </div>
            <div className="items-center gap-x-8 hidden lg:flex">
                <ButtonIcon className="group bg-white border border-textDesc/10 w-10 h-10 lg:w-16 lg:h-16 xl:w-25 xl:h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50 hover:drop-shadow-xl">
                    <img
                        src={arrowLeft1}
                        alt=""
                        className="filter transition duration-150 group-hover:filter-invert"
                    />
                </ButtonIcon>
                <ButtonIcon className="group bg-white border border-textDesc/10 w-10 h-10 lg:w-16 lg:h-16 xl:w-25 xl:h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50 hover:drop-shadow-xl">
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
