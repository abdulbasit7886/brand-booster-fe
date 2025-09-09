import React from "react";
import NavLink from "../../data/NavLink";
import logo from "../../asset/logo/logo.png";
import boostIcon from "../../asset/icons/booster.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className=" w-[95%] lg:w-[91.1%] h-15 lg:h-20 z-10  font-Inter fixed  top-5 left-[4.45%]  flex items-center justify-between px-3 pr-4 pl-6 bg-white rounded-[50px]">
      <div className="  ">
        <Image
          src={logo}
          alt=""
          className="h-12 w-36.375"
          style={{ height: "48px", width: "auto" }}
        />
      </div>
      <ul className="flex items-center gap-3  ">
        {NavLink.map((link, index) => {
          return (
            <li
              key={index}
              className="flex items-center text-lg leading-[120%] gap-2 capitalize  px-1.5 py-1 text-[#414651] cursor-pointer"
            >
              <p>{link.name}</p>
              <span className="flex  items-center justify-center text-textB">
                {link.icon}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center w-[12.31rem] h-15  justify-center  gap-3 cursor-pointer rounded-full bg-gradient-to-tr from-sky to-blue text-white ">
        <Image src={boostIcon} alt="" className="h-5 w-auto" />
        <p className="text-xl">Boost now</p>
      </div>
    </div>
  );
};

export default Navigation;
