import logo from "../../assets/Logo.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.svg";

export default function Footer() {
    return (
        <div className="w-full mt-6 lg:mt-24 xl:px-165 flex flex-col sm:flex-row gap-x-4 gap-y-6 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col w-full sm:w-2/5 md:w-1/2 gap-y-2 md:gap-y-4 lg:gap-y-8">
                <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8">
                    <div>
                        <img src={logo} alt="logo" className="w-28 md:w-fit" />
                    </div>
                    <p className="text-sm md:text-base text-justify lg:text-lg xl:text-23 text-textDesc/50 leading-1.6">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                </div>

                <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-8">
                    <img src={facebook} alt="fb" className="w-6 md:w-fit" />
                    <img src={twitter} alt="tw" className="w-6 md:w-fit" />
                    <img src={instagram} alt="ins" className="w-6 md:w-fit" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-x-2 md:gap-x-4 lg:gap-x-28 xl:gap-x-[121px] ml-auto">
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-sm lg:text-base xl:text-lg text-textDesc/75 leading-1.6 flex-1">
                    <h4 className="text-textDesc font-bold leading-1.2 text-base lg:text-lg xl:text-23">
                        Company
                    </h4>
                    <span>About</span>
                    <span>Career</span>
                    <span>Mobile</span>
                </div>
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-sm lg:text-base xl:text-lg text-textDesc/75 leading-1.6 flex-1">
                    <h4 className="text-textDesc font-bold leading-1.2 text-base lg:text-lg xl:text-23">
                        Contact
                    </h4>
                    <span>Why Travlog?</span>
                    <span>Partner with us</span>
                    <span>FAQ’s</span>
                    <span>Blog</span>
                </div>
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-sm lg:text-base xl:text-lg text-textDesc/75 leading-1.6 lg:max-w-52 text-wrap">
                    <h4 className="text-textDesc font-bold leading-1.2 text-base lg:text-lg xl:text-23">
                        Meet Us
                    </h4>
                    <span>+00 92 1234 56789</span>
                    <span className="text-ellipsis overflow-x-hidden">
                        info@travlog.com
                    </span>
                    <span>205. R Street, New York BD23200</span>
                </div>
            </div>
        </div>
    );
}
