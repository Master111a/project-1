import HeadDestination from "./components/HeadDestination";
import ListDestination from "./components/ListDestination";
import sixX from "../../assets/sixX.png";
export default function TopDestination() {
    return (
        <div className="flex flex-col">
            <div className="w-full relative">
                <HeadDestination />
                <img
                    src={sixX}
                    alt="icon"
                    className="absolute hidden lg:block right-0 bottom-0 translate-y-2/3 -translate-x-1/3"
                />
            </div>
            <ListDestination />
        </div>
    );
}
