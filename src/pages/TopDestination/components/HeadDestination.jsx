import arrowleft1 from "../../../assets/arrow-left1.png";
import arrowright1 from "../../../assets/arrow-right2.png";
import { ButtonIcon } from "../../../components";
export default function HeadDestination() {
    return (
        <div className="flex items-center justify-between lg:py-16 lg:px-165">
            <div className="font-bold text-left w-full">
                <h2 className="text-strongTextColor text-xl lg:text-2xl uppercase leading-1.2">
                    Top Destination
                </h2>
                <h3 className="text-textDesc text-3xl lg:text-5xl leading-1.2">
                    Explore top destination
                </h3>
            </div>
            <div className="flex items-center gap-x-8">
                <ButtonIcon className="bg-white border border-textDesc/10 w-25 h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50">
                    <img src={arrowleft1} alt="" />
                </ButtonIcon>
                <ButtonIcon className="bg-white border border-textDesc/10 w-25 h-25 cursor-pointer hover:bg-buttonColor hover:border-buttonColor/50">
                    <img src={arrowright1} alt="" />
                </ButtonIcon>
            </div>
        </div>
    );
}
