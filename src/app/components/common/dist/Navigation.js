"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavLink_1 = require("../../data/NavLink");
var logo_png_1 = require("../../asset/logo/logo.png");
var booster_png_1 = require("../../asset/icons/booster.png");
var image_1 = require("next/image");
var fa6_1 = require("react-icons/fa6");
var Navigation = function () {
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    var handleActive = function () {
        setActive(!active);
    };
    return (react_1["default"].createElement("div", { className: "lg:w-[91.1%] w-screen h-15 lg:h-20 z-100 font-Inter fixed px-5 lg:top-5 lg:left-[4.45%]   flex items-center justify-between lg:px-3 lg:pr-4 lg:pl-6 pr-6 pl-4 bg-white lg:rounded-[50px]" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], alt: "", className: "lg:h-16 lg:w-auto" })),
        react_1["default"].createElement("div", { className: "\n        lg:flex lg:items-center lg:gap-3 \n        absolute top-full  right-0  lg:mt-0\n        lg:rounded-none \n        lg:relative lg:top-auto lg:px-auto lg:py-auto \n        py-7 px-5 lg:bg-transparent bg-white \n        lg:w-auto w-[50%] lg:h-auto h-screen\n        transition-all duration-300 ease-in-out\n        " + (active
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-x-5 lg:opacity-100 lg:visible lg:translate-x-0") + "\n        lg:flex-row flex-col\n        space-y-6 lg:space-y-0  lg:shadow-none\n      " },
            react_1["default"].createElement("ul", { className: "lg:flex lg:items-center lg:gap-3 lg:flex-row flex-col space-y-6 lg:space-y-0" }, NavLink_1["default"].map(function (link, index) {
                return (react_1["default"].createElement("li", { key: index, className: "flex items-center text-lg leading-[120%] gap-2 capitalize px-1.5 py-1 text-[#414651] cursor-pointer" },
                    react_1["default"].createElement("p", null, link.name),
                    react_1["default"].createElement("span", { className: "flex items-center justify-center text-textB" }, link.icon)));
            }))),
        react_1["default"].createElement("div", { className: "flex items-center gap-7" },
            react_1["default"].createElement("div", { className: "flex items-center lg:w-[12.31rem] lg:h-15 w-[8.31rem] h-11 justify-center lg:gap-3 gap-1.5 cursor-pointer rounded-full bg-gradient-to-tr from-sky to-blue text-white hover:opacity-90 transition-opacity duration-200" },
                react_1["default"].createElement(image_1["default"], { src: booster_png_1["default"], alt: "", className: "h-5 w-auto" }),
                react_1["default"].createElement("p", { className: "lg:text-xl text-[1rem]" }, "Boost now")),
            react_1["default"].createElement("div", { className: "lg:hidden", onClick: handleActive }, active ? (react_1["default"].createElement(fa6_1.FaX, { className: "text-xl transition-transform duration-200 hover:rotate-90" })) : (react_1["default"].createElement(fa6_1.FaBars, { className: "text-xl transition-transform duration-200 hover:rotate-180" }))))));
};
exports["default"] = Navigation;
