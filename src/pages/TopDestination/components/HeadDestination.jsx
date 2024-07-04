import arrowLeft1 from "../../../assets/arrow-left1.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import { ButtonIcon } from "../../../components";
export default function HeadDestination() {
    return (
        <div className="flex items-center justify-between p-4 lg:p-8 xl:py-16 xl:px-165">
            <div className="font-bold text-left w-full">
                <h2 className="text-strongTextColor text-lg lg:text-xl xl:text-23 uppercase leading-1.2">
                    Top Destination
                </h2>
                <h3 className="text-textDesc text-2xl lg:text-3xl xl:text-5xl leading-1.2">
                    Explore top destination
                </h3>
            </div>
            <div className="flex items-center gap-x-8">
                <ButtonIcon className="group bg-white border border-textDesc/10 w-16 h-16 xl:w-25 xl:h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50">
                    <img
                        src={arrowLeft1}
                        alt=""
                        className="filter transition duration-150 group-hover:filter-invert"
                    />
                </ButtonIcon>
                <ButtonIcon className="group bg-white border border-textDesc/10 w-16 h-16 xl:w-25 xl:h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50">
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
