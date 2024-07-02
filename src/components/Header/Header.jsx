import Navigation from "./components/Navigation";
import Ellipse23 from "../../assets/Ellipse_23.png";
import logo from "../../assets/Logo.png";
export default function Header() {
    return (
        <div className="w-full h-[113px] relative z-[1]">
            <header className="flex items-center h-full w-full max-w-xl mx-auto justify-between ">
                <img src={logo} alt="Logo" />
                <Navigation />
                <div className="flex items-center text-sm font-bold ">
                    <div className="px-8 py-4 bg-white text-textLinkColor cursor-pointer">
                        Login
                    </div>
                    <div className="px-8 py-4 text-white bg-buttonColor rounded-full cursor-pointer">
                        SignUp
                    </div>
                </div>
            </header>
            <img src={Ellipse23} alt="" className="absolute top-0 left-0 z-0" />
        </div>
    );
}
