"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var Dropdown = function (_a) {
    var links = _a.links;
    var _b = react_1.useState(links[0]), selected = _b[0], setSelected = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var handleOpenDrop = function () {
        setOpen(!open);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "lg:hidden flex items-center  w-[90%] mx-auto h-14 bg-white rounded-xl border-1 border-[#D5D7DA] shadow-xs shadow-[#0A0D120D]  " },
            react_1["default"].createElement("div", { className: "flex items-center justify-between px-3.5 w-full ", onClick: handleOpenDrop },
                react_1["default"].createElement("span", { className: "text-lg capitalize " }, selected.name),
                react_1["default"].createElement(fa6_1.FaChevronDown, { className: "text-textB transition-all " + (open ? "rotate-180" : "rotate-0") }))),
        open && (react_1["default"].createElement("ul", { className: "bg-white px-3 py-2 mt-3 w-[90%] mx-auto rounded-xl transition-all space-y-2 duration-300 ease-in-out transform \n        " + (open ? " translate-y-0 opacity-100" : " translate-y-5 opacity-0") + "\n          " }, links.map(function (items, i) {
            return (react_1["default"].createElement("li", { onClick: function () {
                    setSelected(items);
                    setOpen(false);
                }, key: i, className: "py-3 px-2 transition-all  hover:bg-body capitalize rounded-lg" }, items.name));
        })))));
};
exports["default"] = Dropdown;
