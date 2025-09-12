"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../components/page component/Header");
var HowWorks_1 = require("../components/page component/HowWorks");
var ResCard_1 = require("../components/common/ResCard");
var Casestudy_1 = require("../components/page component/Casestudy");
var PulishPackage_1 = require("../components/page component/PulishPackage");
var Pricing_1 = require("../components/page component/Pricing");
var MoneyBack_1 = require("../components/page component/MoneyBack");
var Whyuse_1 = require("../components/page component/Whyuse");
var Question_1 = require("../components/page component/Question");
var ReadyGrow_1 = require("../components/common/ReadyGrow");
var Footer_1 = require("../components/page component/Footer");
var HomePage = function () {
    return (react_1["default"].createElement("div", { className: "overflow-x-hidden" },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(HowWorks_1["default"], null),
        react_1["default"].createElement(ResCard_1["default"], null),
        react_1["default"].createElement(ReadyGrow_1["default"], null),
        react_1["default"].createElement(Casestudy_1["default"], null),
        react_1["default"].createElement(PulishPackage_1["default"], null),
        react_1["default"].createElement(Pricing_1["default"], null),
        react_1["default"].createElement(MoneyBack_1["default"], null),
        react_1["default"].createElement(Whyuse_1["default"], null),
        react_1["default"].createElement(Question_1["default"], null),
        react_1["default"].createElement(ReadyGrow_1["default"], null),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = HomePage;
