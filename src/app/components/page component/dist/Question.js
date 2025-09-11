"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Questionboard_1 = require("../common/Questionboard");
var Question = function () {
    return (react_1["default"].createElement("div", { className: "bg-purple-50  w-full flex flex-col items-center  lg:py-24 py-10 lg:px-20 px-3" },
        react_1["default"].createElement("div", { className: "text-center space-y-2" },
            react_1["default"].createElement("h1", { className: "lg:text-[4rem] text-3xl font-extrabold font-futura tracking-[-2%]  uppercase text-blue-900" }, "frequently asked questions"),
            react_1["default"].createElement("p", { className: "lg:text-lg text-sm text-textB " },
                "Benefit from the readership and authority our partnered news sites have built over many years. ",
                react_1["default"].createElement("br", null),
                " Our growing list of news sites ranks high on Google, delivering you quality readers and clicks.")),
        react_1["default"].createElement(Questionboard_1["default"], null)));
};
exports["default"] = Question;
