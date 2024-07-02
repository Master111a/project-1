import { useState } from "react";
const listNavigation = [
  { name: "Home", url: "/" },
  { name: "Discover", url: "" },
  { name: "Special Deals", url: "" },
  { name: "Contact", url: "" },
];
export default function Navigation() {
  const [active, setActive] = useState(true);
  return (
    <nav className="">
      <ul className="flex justify-between items-center gap-x-16 text-sm font-bold leading-[1.2]">
        {listNavigation?.map((item) => (
          <li
            className={`${
              item?.url === "/" ? "text-textLinkColor" : "text-textDesc/50"
            }`}>
            {item?.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
