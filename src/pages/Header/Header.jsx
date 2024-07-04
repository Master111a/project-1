import Navigation from "./components/Navigation";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
export default function Header() {
    return (
        <div className="w-full relative z-[1] py-2 md:py-4 lg:py-6 2xl:py-8 2xl:px-165">
            <header className="flex items-center h-full w-full justify-between">
                <div className="flex">
                    <img src={logo} alt="Logo" />
                </div>
                <Navigation />
                <div className="flex items-center text-sm font-bold ">
                    <Button
                        className={
                            "text-textLinkColor bg-white hover:underline"
                        }
                        title={"Log In"}
                    />
                    <Button
                        className={
                            "text-white bg-buttonColor hover:bg-buttonColor/80"
                        }
                        title={"Sign Up"}
                    />
                </div>
            </header>
        </div>
    );
}
