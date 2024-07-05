import logo from "../../assets/Logo.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.svg";

export default function Footer() {
    return (
        <div className="w-full mt-6 lg:mt-32 xl:px-165 flex flex-col gap-x-4 md:flex-row gap-y-6 lg:gap-y-0 lg:flow-row">
            <div className="flex flex-col w-full lg:max-w-60 xl:max-w-278 gap-y-4 lg:gap-y-16">
                <div className="flex flex-col gap-y-4 lg:gap-y-6 xl:gap-y-8">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="text-base lg:text-lg xl:text-23 text-textDesc/50 leading-1.6">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                </div>

                <div className="flex items-center gap-x-6 xl:gap-x-8">
                    <img src={facebook} alt="fb" />
                    <img src={twitter} alt="tw" />
                    <img src={instagram} alt="ins" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-x-4 lg:flex lg:gap-x-28 xl:gap-x-[121px] ml-auto">
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-base xl:text-lg text-textDesc/75 leading-1.6 flex-1">
                    <h4 className="text-textDesc font-bold leading-1.2 text-lg lg:text-23">
                        Company
                    </h4>
                    <span>About</span>
                    <span>Career</span>
                    <span>Mobile</span>
                </div>
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-base xl:text-lg text-textDesc/75 leading-1.6 flex-1">
                    <h4 className="text-textDesc font-bold leading-1.2 text-lg lg:text-23">
                        Contact
                    </h4>
                    <span>Why Travlog?</span>
                    <span>Partner with us</span>
                    <span>FAQ’s</span>
                    <span>Blog</span>
                </div>
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-base xl:text-lg text-textDesc/75 leading-1.6 lg:max-w-52 text-wrap">
                    <h4 className="text-textDesc font-bold leading-1.2 text-lg lg:text-23">
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
