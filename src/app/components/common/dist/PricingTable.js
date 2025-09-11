"use strict";
exports.__esModule = true;
exports.PricingTable = void 0;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var g_png_1 = require("../../asset/images/c logos/g.png");
var bi_png_1 = require("../../asset/images/c logos/bi.png");
var ap_png_1 = require("../../asset/images/c logos/ap.png");
var datafloq_png_1 = require("../../asset/images/c logos/datafloq.png");
var benziga_png_1 = require("../../asset/images/c logos/benziga.png");
var si_png_1 = require("../../asset/images/c logos/si.png");
var newsbreak_png_1 = require("../../asset/images/c logos/newsbreak.png");
var sotu_png_1 = require("../../asset/images/c logos/sotu.png");
var drimble_png_1 = require("../../asset/images/c logos/drimble.png");
var eng_png_1 = require("../../asset/images/c logos/eng.png");
var du_png_1 = require("../../asset/images/c logos/du.png");
var image_1 = require("next/image");
var plans = [
    {
        heading: "limited",
        price: "€195",
        title: "Best For Restricted Topics",
        outlets: "200",
        authority: "69",
        visitors: "2.2m",
        accepts: true,
        mention: false,
        badge: true,
        publish: "5 days",
        indexed: true,
        insider: false,
        press: false,
        datafat: false,
        benzinga: false,
        street: false,
        newsbreak: false,
        spot: true,
        dir: true,
        betting: true,
        blockchain: true,
        crypto: true,
        trading: true
    },
    {
        heading: "popular",
        price: "€295",
        title: "Best For Businesses Growth",
        outlets: "300",
        authority: "69",
        visitors: "26.4m",
        accepts: true,
        mention: false,
        badge: true,
        publish: "5 days",
        indexed: true,
        insider: false,
        press: false,
        datafat: false,
        benzinga: false,
        street: false,
        newsbreak: false,
        spot: true,
        dir: true,
        betting: true,
        blockchain: true,
        crypto: true,
        trading: true
    },
    {
        heading: "authority",
        price: "€595",
        title: "Best For Google Rankings",
        outlets: "6",
        authority: "72",
        visitors: "2.2m/185.8m",
        accepts: true,
        mention: true,
        badge: true,
        publish: "7 days",
        indexed: true,
        insider: true,
        press: true,
        datafat: true,
        benzinga: true,
        street: true,
        newsbreak: false,
        spot: true,
        dir: true,
        betting: false,
        blockchain: false,
        crypto: false,
        trading: false
    },
    {
        heading: "ultimate",
        price: "€795",
        title: "Best For Max Exposure",
        outlets: "400",
        authority: "94",
        visitors: "224.5m",
        accepts: true,
        mention: true,
        badge: true,
        publish: "7 days",
        indexed: true,
        insider: true,
        press: true,
        datafat: true,
        benzinga: true,
        street: true,
        newsbreak: true,
        spot: true,
        dir: true,
        betting: false,
        blockchain: true,
        crypto: false,
        trading: false
    },
];
var overviews = [
    { label: "Total News Outlets", key: "outlets" },
    { label: "Max Domain Authority", key: "authority" },
    { label: "Monthly Visitors", key: "visitors" },
    { label: "Accepts Most Topics", key: "accepts", isBool: true },
    { label: "AI Mention Potential", key: "mention", isBool: true },
    { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
    { label: "Published in days", key: "publish" },
];
var overview = [
    { label: "Indexed on Search", key: "indexed", img: g_png_1["default"] },
    { label: "Business Insider", key: "insider", img: bi_png_1["default"] },
    { label: "Associated Press", key: "press", img: ap_png_1["default"] },
    { label: "Datafloq", key: "datafat", img: datafloq_png_1["default"] },
    { label: "Benzinga", key: "benzinga", img: benziga_png_1["default"] },
    { label: "Street Insider", key: "street", img: si_png_1["default"] },
    { label: "NewsBreak", key: "newsbreak", img: newsbreak_png_1["default"] },
    { label: "SpotOnTheUSA", key: "spot", img: sotu_png_1["default"] },
    { label: "Dirimble.com", key: "dir", img: drimble_png_1["default"] },
];
var overviewss = [
    { label: "Betting & Sports Picks", key: "betting" },
    { label: "Blockchain", key: "blockchain" },
    { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
    { label: "Financial Trading", key: "trading" },
];
var Check = function () { return (react_1["default"].createElement("div", { className: "flex items-center justify-center w-full" },
    react_1["default"].createElement("span", { className: "text-[#079455] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-[2.5px] border-[#079455]" },
        react_1["default"].createElement(fa6_1.FaCheck, { className: "" })))); };
var Cross = function () { return (react_1["default"].createElement("div", { className: "flex items-center justify-center w-full" },
    react_1["default"].createElement("span", { className: "text-[#F04438] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-[2.5px] border-[#F04438]" },
        react_1["default"].createElement(fa6_1.FaX, null)))); };
exports.PricingTable = function () {
    var _a = react_1.useState("en"), active = _a[0], setActive = _a[1];
    return (react_1["default"].createElement("div", { className: "w-full p-4 mt-10 overflow-hidden" },
        react_1["default"].createElement("div", { className: "lg:overflow-x-visible overflow-x-auto" },
            react_1["default"].createElement("div", { className: "lg:min-w-full min-w-[800px]" },
                react_1["default"].createElement("table", { className: "w-full text-sm text-center border-collapse" },
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", { className: "border-b border-gray-300" },
                            react_1["default"].createElement("th", { className: "w-[180px] lg:w-[262.4px] sticky left-0 bg-white z-10" },
                                react_1["default"].createElement("div", { className: "" })),
                            plans.map(function (plan, idx) { return (react_1["default"].createElement("th", { key: idx, className: "text-lg lg:text-xl uppercase font-extrabold text-left px-4 lg:px-6 py-3 lg:py-4 w-[180px] lg:w-[262.4px] bg-white" }, plan.heading)); }))),
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-2 lg:p-4 sticky left-0 bg-white z-10" },
                                react_1["default"].createElement("div", { className: "flex items-center justify-center mt-4 lg:mt-20 w-full max-w-[14.31rem] bg-[#E9EAEB] rounded-full p-1.5 mx-auto" },
                                    react_1["default"].createElement("button", { onClick: function () { return setActive("en"); }, className: "w-full h-8 lg:h-11 rounded-full gap-1 lg:gap-2 flex items-center justify-center p-1 text-xs lg:text-sm " + (active === "en"
                                            ? "bg-white text-textD"
                                            : "text-textB") },
                                        react_1["default"].createElement("div", { className: "w-4 h-4 lg:w-6 lg:h-6 bg-gray-300 rounded-full flex-shrink-0" },
                                            react_1["default"].createElement(image_1["default"], { src: eng_png_1["default"], alt: "english flag" })),
                                        "English"),
                                    react_1["default"].createElement("button", { onClick: function () { return setActive("nl"); }, className: "w-full h-8 lg:h-11 rounded-full gap-1 lg:gap-2 flex items-center justify-center p-1 text-xs lg:text-sm " + (active === "nl"
                                            ? "bg-white text-textD"
                                            : "text-textB") },
                                        react_1["default"].createElement("div", { className: "w-4 h-4 lg:w-6 lg:h-6 bg-gray-300 rounded-full flex-shrink-0" },
                                            react_1["default"].createElement(image_1["default"], { src: du_png_1["default"], alt: "dutch flag" })),
                                        "Dutch"))),
                            plans.map(function (plan, idx) { return (react_1["default"].createElement("th", { key: idx, className: "pt-4 lg:pt-8 text-[#181D27] space-y-3 lg:space-y-6 px-4 lg:px-6 text-left bg-white" },
                                react_1["default"].createElement("div", { className: "" },
                                    react_1["default"].createElement("div", { className: "text-xl lg:text-3xl font-semibold tracking-[-2%]" }, plan.price),
                                    react_1["default"].createElement("div", { className: "mt-1 text-xs leading-4 lg:leading-5 font-medium text-[#535862]" }, plan.title)),
                                react_1["default"].createElement("button", { className: "mt-2 lg:mt-3 w-full py-2 lg:py-3 bg-gradient-to-tr from-sky to-blue text-white text-sm lg:text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer" }, "Get started"))); }))),
                    react_1["default"].createElement("tbody", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", { colSpan: plans.length + 1, className: "pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] sticky left-0 bg-white z-10" }, "Overview")),
                        overviews.map(function (row, idx) { return (react_1["default"].createElement("tr", { key: idx, className: "odd:bg-white even:bg-gray-50" },
                            react_1["default"].createElement("td", { className: "p-2 lg:p-3 text-left font-medium text-xs lg:text-sm leading-5 text-[#181D27] flex items-center gap-1 lg:gap-2 sticky left-0 bg-white z-10" },
                                row.label,
                                react_1["default"].createElement("span", { className: "text-xs text-gray-500 border rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center flex-shrink-0" }, "?")),
                            plans.map(function (p, i) { return (react_1["default"].createElement("td", { key: i, className: "p-2 lg:p-3 text-center text-textB" }, row.isBool ? (p[row.key] ? (react_1["default"].createElement(Check, null)) : (react_1["default"].createElement(Cross, null))) : (p[row.key]))); }))); }),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", { colSpan: plans.length + 1, className: "pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] border-t border-gray-300 sticky left-0 bg-white z-10" }, "Included Outlets")),
                        overview.map(function (row, idx) { return (react_1["default"].createElement("tr", { key: idx, className: "odd:bg-white even:bg-gray-50" },
                            react_1["default"].createElement("td", { className: "p-2 lg:p-3 text-left font-medium text-xs lg:text-sm flex items-center gap-2 sticky left-0 bg-white z-10" },
                                row.label,
                                react_1["default"].createElement(image_1["default"], { src: row.img, alt: "", className: "lg:h-4 lg:w-auto" })),
                            plans.map(function (p, i) { return (react_1["default"].createElement("td", { key: i, className: "py-2 lg:py-3" }, p[row.key] ? react_1["default"].createElement(Check, null) : react_1["default"].createElement(Cross, null))); }))); }),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", { colSpan: plans.length + 1, className: "pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] border-t border-gray-300 sticky left-0 bg-white z-10" }, "Accepted Topics")),
                        overviewss.map(function (row, idx) { return (react_1["default"].createElement("tr", { key: idx, className: "odd:bg-white even:bg-gray-50" },
                            react_1["default"].createElement("td", { className: "p-2 lg:p-3 text-left font-medium text-xs lg:text-sm text-[#181D27] flex items-center gap-1 lg:gap-2 sticky left-0 bg-white z-10" },
                                row.label,
                                react_1["default"].createElement("span", { className: "text-xs text-gray-500 border rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center flex-shrink-0" }, "?")),
                            plans.map(function (p, i) { return (react_1["default"].createElement("td", { key: i, className: "py-2 lg:py-3" }, p[row.key] ? react_1["default"].createElement(Check, null) : react_1["default"].createElement(Cross, null))); }))); }),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", { className: "p-2 lg:p-4 sticky left-0 bg-white z-10" }),
                            plans.map(function (plan, idx) { return (react_1["default"].createElement("td", { key: idx, className: "p-4 lg:p-6 text-[#181D27] space-y-2 lg:space-y-3 text-left bg-white" },
                                react_1["default"].createElement("button", { className: "w-full py-2 lg:py-3 bg-gradient-to-tr from-sky to-blue text-white text-sm lg:text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer" }, "Get started"))); }))))))));
};
