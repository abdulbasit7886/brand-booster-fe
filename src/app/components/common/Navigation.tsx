import React, { useState } from "react";
import NavLink from "../../data/NavLink";
import logo from "../../asset/logo/logo.png";
import boostIcon from "../../asset/icons/booster.svg";
import Image from "next/image";
import { FaBars, FaX } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="lg:w-[91.1%] w-screen h-15 lg:h-20 z-100 font-Inter fixed px-5 lg:top-5 lg:left-[4.45%]   flex items-center justify-between lg:px-3 lg:pr-4 lg:pl-6 pr-6 pl-4 bg-white lg:rounded-[50px]">
      <div>
        <Image src={logo} alt="" className="lg:h-16 h-11 w-auto" />
      </div>
      <div
        className={`
        lg:flex lg:items-center lg:gap-3 
        absolute top-full  right-0  lg:mt-0
        lg:rounded-none 
        lg:relative lg:top-auto lg:px-auto lg:py-auto 
        py-7 px-5 lg:bg-transparent bg-white 
        lg:w-auto w-[50%] lg:h-auto h-screen
        transition-all duration-300 ease-in-out
        ${
          active
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-x-5 lg:opacity-100 lg:visible lg:translate-x-0"
        }
        lg:flex-row flex-col
        space-y-6 lg:space-y-0  lg:shadow-none
      `}
      >
        <ul className="lg:flex lg:items-center lg:gap-3 lg:flex-row flex-col space-y-6 lg:space-y-0">
          {NavLink.map((link, index) => {
            return (
              <li
                onClick={() => {
                  router.push(link.link);
                  setActive(false);
                }}
                key={index}
                className="flex items-center text-lg leading-[120%] gap-2 capitalize px-1.5 py-1 text-[#414651] cursor-pointer"
              >
                <p>{link.name}</p>
                <span className="flex items-center justify-center text-textB">
                  {link.icon}
                </span>
              </li>
            );
          })}
          <li className="flex items-center text-lg leading-[120%] gap-2 capitalize px-1.5 py-1 text-[#414651] cursor-pointer">
            <span className="flex items-center justify-center text-[#414651] lg:hidden ">
              get started
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-7">
        <div
          onClick={() => router.push("/coming-soon")}
          className="hidden lg:flex items-center lg:w-[12.31rem] lg:h-15 w-[8.31rem] h-11 justify-center lg:gap-3 gap-1.5 cursor-pointer rounded-full bg-gradient-to-tr from-sky to-blue text-white hover:opacity-90 transition-opacity duration-200"
        >
          <Image src={boostIcon} alt="" className="h-5 w-auto" />
          <p className="lg:text-xl text-[1rem]">Boost now</p>
        </div>

        <div className="lg:hidden" onClick={handleActive}>
          {active ? (
            <FaX className="text-xl transition-transform duration-200 hover:rotate-90" />
          ) : (
            <FaBars className="text-xl transition-transform duration-200 hover:rotate-180" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
