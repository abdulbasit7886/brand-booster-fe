"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PricingTable_1 = require("../common/PricingTable");
var NavbarP_1 = require("../ui/NavbarP");
var MobileTable_1 = require("../common/MobileTable");
var Pricing = function () {
    var links = [
        { name: "none", to: "/" },
        { name: "small", to: "/" },
        { name: "regular", to: "/" },
        { name: "long", to: "/" },
    ];
    return (react_1["default"].createElement("div", { className: "lg:mt-21 mt-5 flex flex-col justify-center items-center py-8  " },
        react_1["default"].createElement("div", { className: "text-center lg:space-y-6 space-y-2 lg:mb-10 mb-6 px-4 lg:px-0" },
            react_1["default"].createElement("h1", { className: "lg:text-7xl text-[2rem] font-futura uppercase tracking-[-2%] leading-[92%] font-extrabold text-blue-900  " }, "Grow Your Brand Today"),
            react_1["default"].createElement("p", { className: "lg:text-xl text-sm text-[#717680] " }, "Get featured on major news sites to drive visitors and customers to your website, all for a one-time payment.")),
        react_1["default"].createElement("div", { className: "space-y-6 flex items-center justify-center flex-col" },
            react_1["default"].createElement("span", { className: "text-lg text-textD font-semibold capitalize " }, "writing packages"),
            react_1["default"].createElement(NavbarP_1["default"], { links: links })),
        react_1["default"].createElement("div", { className: "lg:block hidden w-full" },
            react_1["default"].createElement(PricingTable_1.PricingTable, null)),
        react_1["default"].createElement("div", { className: "lg-hidden block w-full" },
            react_1["default"].createElement(MobileTable_1["default"], null))));
};
exports["default"] = Pricing;
