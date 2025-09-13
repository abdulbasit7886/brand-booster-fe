import React from "react";
import { PricingTable } from "../common/PricingTable";
import NavbarP from "../ui/NavbarP";
import MobileTable from "../common/MobileTable";

const Pricing = () => {
  const links = [
    { name: "none", to: "/coming-soon" },
    { name: "small", to: "/coming-soon" },
    { name: "regular", to: "/coming-soon" },
    { name: "long", to: "/coming-soon" },
  ];
  return (
    <div className="lg:mt-21 mt-5 flex flex-col justify-center items-center py-8  ">
      <div className="text-center lg:space-y-6 space-y-2 lg:mb-10 mb-6 px-4 lg:px-0">
        <h1 className="2xl:text-7xl lg:text-5xl text-[2rem] font-futura uppercase tracking-[-2%] leading-[92%] font-extrabold text-blue-900  ">
          Grow Your Brand Today
        </h1>
        <p className="2xl:text-xl lg:text-lg text-sm text-[#717680] ">
          Get featured on major news sites to drive visitors and customers to
          your website, all for a one-time payment.
        </p>
      </div>
      <div className="space-y-6 flex items-center justify-center flex-col">
        <span className="text-lg text-textD font-semibold capitalize ">
          writing packages
        </span>
        <NavbarP links={links} />
      </div>
      <div className="lg:block hidden w-full">
        <PricingTable />
      </div>
      <div className="lg-hidden block w-full">
        <MobileTable />
      </div>
    </div>
  );
};

export default Pricing;
