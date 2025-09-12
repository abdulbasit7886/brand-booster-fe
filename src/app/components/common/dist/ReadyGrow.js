"use strict";
exports.__esModule = true;
var react_1 = require("react");
var flash_g_png_1 = require("../../asset/icons/flash g.png");
var image_1 = require("next/image");
var ReadyGrow = function () {
    return (react_1["default"].createElement("div", { className: "lg:w-[95%] lg:h-[17rem] h-auto w-[95%] mt-7.5  lg:py-12  py-5 lg:px-16 px-4 mx-auto bg-gradient-to-tr from-blue to-sky lg:rounded-4xl rounded-xl flex items-center justify-between flex-col lg:flex-row " },
        react_1["default"].createElement("div", { className: "lg:space-y-7 spcae-y-3" },
            react_1["default"].createElement("h1", { className: "lg:text-5xl text-xl font-bold lg:leading-[120%] tracking-[-2%] font-futura uppercase lg:text-left text-center  text-white " }, "Ready to Grow Your Brand?"),
            react_1["default"].createElement("p", { className: "text-[#FFFFFFB2] lg:text-lg text-sm lg:text-left text-center lg:w-[74%]" }, "Your brand deserves to be recognized! Start getting real exposure for your brand and high-quality buyers for your site.")),
        react_1["default"].createElement("button", { className: "bg-white  lg:w-[17.5rem] lg:h-14 w-full h-auto  lg:text-lg text-sm mt-6 lg:mt-0 py-2 rounded-full  transition duration-300 lg:ml-[15.56rem] gap-2.5 flex items-center justify-center text-[#214750]" },
            react_1["default"].createElement(image_1["default"], { src: flash_g_png_1["default"], alt: "" }),
            "Get Started Now")));
};
exports["default"] = ReadyGrow;
