import React from "react";
import PackageRc from "../common/PackageRc";
import RestrictedTop from "../common/RestrictedTop";
import NavbarP from "../ui/NavbarP";

const PulishPackage = () => {
  const links = [
    { name: "limited", to: "/limited" },
    { name: "popular", to: "/popular" },
    { name: "autharity", to: "/autharity" },
    { name: "ultimate", to: "/ultimate" },
  ];
  return (
    <div className="mt-21  bg-[#C8D0FA50] py-20 flex flex-col justify-center">
      <div className=" space-y-4 pb-11">
        <h1 className="lg:text-7xl tracking-[-2%]  font-extrabold text-blue-900 font-futura text-center uppercase ">
          publishing Packages
        </h1>
        <p className="lg:text-[1rem]  text-textB capitalize leading-[150%] text-center font-Inter">
          Benefit from the readership and authority our partnered news sites
          have built over many years. <br /> Our growing list of news sites
          ranks high on Google, delivering you quality readers and clicks.
        </p>
      </div>
      <NavbarP links={links}/>
      <PackageRc/>
      <RestrictedTop/>
    </div>
  );
};

export default PulishPackage;
