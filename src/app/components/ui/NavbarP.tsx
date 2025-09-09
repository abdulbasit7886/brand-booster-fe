import Link from "next/link";
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
type NavLink = {
  name: string;
  href?: string;
  to?: string;
};

type NavbarPProps = {
  links: NavLink[];
};
const NavbarP: React.FC<NavbarPProps> = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#E7E9F2] md:h-17 h-11 w-[36.5rem] p-2  rounded-full flex items-center border border-[#E9EAEB] justify-around mx-auto gap-1">
      {links.map((link, index) => (
        <Link
          key={index}
          href={""}
          onClick={() => setActiveIndex(index)}
          className={`md:text-xl text-sm capitalize flex items-center justify-center leading-5  w-[8.25rem] h-[3.25rem] rounded-full font-semibold transition-colors duration-300 ${
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
