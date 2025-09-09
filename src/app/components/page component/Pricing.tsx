import React from "react";
import {PricingTable} from "../common/PricingTable";
import NavbarP from "../ui/NavbarP";

const Pricing = () => {
  const links = [
    { name: "none", to: "/limited" },
    { name: "small", to: "/popular" },
    { name: "regular", to: "/autharity" },
    { name: "long", to: "/ultimate" },
  ];
  return (
    <div className="mt-21 flex flex-col justify-center items-center py-8 ">
      <div className="text-center space-y-6 mb-10">
        <h1 className="text-7xl font-futura uppercase tracking-[-2%] leading-[92%] font-extrabold text-blue-900  ">
          Grow Your Brand Today
        </h1>
        <p className="text-xl text-[#414651] ">
          Get featured on major news sites to drive visitors and customers to
          your website, all for a one-time payment.
        </p>
      </div>
      <div className="space-y-6 flex items-center justify-center flex-col">
        <span className="text-lg text-textD font-semibold capitalize ">writing packages</span>
        <NavbarP links={links} />
      </div>
      <PricingTable />
    </div>
  );
};

export default Pricing;
