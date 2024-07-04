import { Button } from "../../components";
import message from "../../assets/message.png";
import Graphic_Elements from "../../assets/Graphic_Elements.png";
import image from "../../assets/image.png";

export default function NewLetter() {
    return (
        <div className="w-full h-fit relative lg:mt-16">
            <div className="w-full lg:px-165">
                <div className="bg-yellowButton/[0.08] px-16 py-32 flex flex-col lg:gap-y-16 rounded-32 relative">
                    <div className="flex flex-col font-bold gap-y-8 text-center">
                        <h2 className="text-strongTextColor text-xl lg:text-23 uppercase leading-1.2">
                            subscribe to our newsletter
                        </h2>
                        <h3 className="text-textDesc text-3xl lg:text-55 leading-1.2">
                            Prepare yourself & let’s explore the beauty of the
                            world
                        </h3>
                    </div>
                    <div className="flex items-center gap-x-16 w-full">
                        <span className="w-full relative">
                            <input
                                type="text"
                                className="outline-none p-8 rounded-32 w-full leading-1.2 text-23 pl-20 font-bold text-textDesc/75"
                                placeholder="Your Email"
                            />
                            <div className="absolute top-1/2 left-4 -translate-y-1/2 translate-x-1/2">
                                <img src={message} alt="email" />
                            </div>
                        </span>
                        <Button
                            className="text-white bg-buttonColor lg:!px-16 lg:!py-8 text-23"
                            title={"Subscribe"}
                        />
                    </div>
                    <div className="w-fit absolute top-0 left-0 lg:-translate-x-[22%] lg:-translate-y-[34%]">
                        <img src={Graphic_Elements} alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0  translate-y-1/2">
                <img src={image} alt="" />
            </div>
        </div>
    );
}
