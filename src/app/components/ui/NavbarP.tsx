import Link from "next/link";
import React, { useState } from "react";
type NavLink = {
  name: string;
  to?: string;
};

type NavbarPProps = {
  links: NavLink[];
};
const NavbarP: React.FC<NavbarPProps> = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#E7E9F2] lg:h-17 h-11 flex lg:w-[36.5rem] w-[20rem] p-2  rounded-full  items-center border border-[#E9EAEB] justify-around mx-auto gap-1">
      {links.map((link, index) => (
        <Link
          key={index}
          href={"/"}
          onClick={() => setActiveIndex(index)}
          className={`md:text-xl text-sm capitalize flex items-center justify-center leading-5 w-[4.5rem] h-[2rem]  lg:w-[8.25rem] lg:h-[3.25rem] rounded-full font-semibold transition-colors duration-300 ${
            activeIndex === index
              ? "bg-gradient-to-tr from-sky to-blue text-white"
              : "bg-transparent text-textB"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarP;
