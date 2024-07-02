import Navigation from "./components/Navigation";
import Ellipse23 from "../../assets/Ellipse_23.png";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
export default function Header() {
  return (
    <div className="w-full py-8 relative z-[1]">
      <header className="flex items-center h-full w-full max-w-xl mx-auto justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <Navigation />
        <div className="flex items-center text-sm font-bold ">
          <Button className={"text-textLinkColor bg-white"} title={"Log In"} />
          <Button className={"text-white bg-buttonColor"} title={"Sign Up"} />
        </div>
      </header>
      <img src={Ellipse23} alt="" className="absolute top-0 left-0 z-0" />
    </div>
  );
}
