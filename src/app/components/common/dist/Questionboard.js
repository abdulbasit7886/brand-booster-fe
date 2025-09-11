"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Faqs_1 = require("../../data/Faqs");
var Dropdown_1 = require("../ui/Dropdown");
var image_1 = require("next/image");
var minus_circle_svg_1 = require("../../asset/icons/minus-circle.svg");
var plus_circle_svg_1 = require("../../asset/icons/plus-circle.svg");
var Questionboard = function () {
    var link = [
        { name: "service" },
        { name: "writing" },
        { name: "publishing" },
    ];
    var _a = react_1.useState("service"), active = _a[0], setActive = _a[1];
    var _b = react_1.useState(null), openIndex = _b[0], setOpenIndex = _b[1];
    var toggleFaqs = function (index) {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (react_1["default"].createElement("div", { className: "lg:w-[75%] w-[100%] h-auto mx-auto bg-white mt-11 flex flex-col items-center lg:rounded-4xl rounded-2xl lg:pb-10 py-5 " },
        react_1["default"].createElement(Dropdown_1["default"], { links: link }),
        react_1["default"].createElement("ul", { className: "lg:flex hidden w-full lg:gap-4 lg:h-20 h-15 items-end justify-center lg:mx-auto border-b border-[#ccc] mb-5" }, link.map(function (item, i) {
            return (react_1["default"].createElement("li", { key: i, onClick: function () { return setActive(item); }, className: "w-full h-full font-semibold text-center flex items-end justify-center pb-2  lg:text-lg text-sm capitalize " + (active === item
                    ? "text-[#4FAABE] border-b-2 border-[#4FAABE]"
                    : "text-textB") }, item.name));
        })),
        react_1["default"].createElement("div", { className: "mt-10 w-full flex flex-col gap-4 lg:px-10 px-[3%] transition-all" }, Faqs_1.Faqs.map(function (Faq, index) {
            return (react_1["default"].createElement("div", { key: index, className: "flex flex-col lg:px-8 w-full py-5 px-2 rounded-3xl " + (openIndex === index ? "bg-[#F5F5F5] py-5" : "bg-white") },
                react_1["default"].createElement("div", { className: "flex justify-between w-full items-center cursor-pointer gap-5", onClick: function () { return toggleFaqs(index); } },
                    react_1["default"].createElement("h3", { className: "lg:text-xl text-[1rem] font-semibold text-[#181D27]" }, Faq.question),
                    openIndex === index ? (react_1["default"].createElement(image_1["default"], { src: minus_circle_svg_1["default"], className: "text-textB lg:w-7 lg:h-7 flex items-center justify-center   rounded-full ", alt: "" })) : (react_1["default"].createElement(image_1["default"], { src: plus_circle_svg_1["default"], className: "text-textB lg:w-7 lg:h-7 flex items-center justify-center   rounded-full", alt: "" }))),
                openIndex === index && (react_1["default"].createElement("div", { className: "transition-all mt-5 lg:text-lg text-xs lg:leading-7  lg:px-0 leading-5" },
                    react_1["default"].createElement("span", null, Faq.answer)))));
        }))));
};
exports["default"] = Questionboard;
