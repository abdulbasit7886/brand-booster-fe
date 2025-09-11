"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var image_1 = require("next/image");
var link_1 = require("next/link");
var logo_2_png_1 = require("../../asset/logo/logo 2.png");
var twitter_png_1 = require("../../asset/icons/twitter.png");
var link_png_1 = require("../../asset/icons/link.png");
var face_png_1 = require("../../asset/icons/face.png");
var insta_png_1 = require("../../asset/icons/insta.png");
var footerLinks = [
    {
        heading: "Get Started",
        links: [
            { to: "", name: "Account Login" },
            { to: "", name: "Affiliate Program" },
            { to: "", name: "Pricing & Packages" },
            { to: "", name: "Reviews" },
            { to: "", name: "Accepted Topics" },
        ]
    },
    {
        heading: "Free Resources",
        links: [
            { to: "", name: "PR Templates" },
            { to: "", name: "Headline Ideas" },
            { to: "", name: "Writing Guidelines" },
            { to: "", name: "PR Newsletter" },
            { to: "", name: "Marketing Blog" },
            { to: "", name: "Help Center" },
        ]
    },
    {
        heading: "Policies",
        links: [
            { to: "", name: "Terms of Service" },
            { to: "", name: "Privacy Policy" },
            { to: "", name: "Refund Policy" },
            { to: "", name: "Cookie Policy" },
            { to: "", name: "Cookie Consent" },
            { to: "", name: "Disclaimer" },
        ]
    },
];
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "bg-[#0C0E12] text-white w-full mt-10" },
        react_1["default"].createElement("div", { className: "max-w-full mx-auto px-6 lg:px-20 py-16" },
            react_1["default"].createElement("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-10" },
                react_1["default"].createElement("div", { className: "col-span-2 lg:col-span-1 space-y-4" },
                    react_1["default"].createElement(image_1["default"], { src: logo_2_png_1["default"], alt: "Brand Logo", className: "h-8 w-auto" }),
                    react_1["default"].createElement("p", { className: "text-[#94979C] leading-7 text-sm sm:text-base" },
                        "Liplyn Information Group ",
                        react_1["default"].createElement("br", null),
                        "Marathon 9a, 1213 PE Hilversum, ",
                        react_1["default"].createElement("br", null),
                        "The Netherlands")),
                footerLinks.map(function (section, index) { return (react_1["default"].createElement("div", { key: index, className: "col-span-1" },
                    react_1["default"].createElement("h3", { className: "text-white text-base lg:text-xl font-medium uppercase tracking-wide" }, section.heading),
                    react_1["default"].createElement("ul", { className: "mt-4 space-y-3" }, section.links.map(function (link, i) { return (react_1["default"].createElement("li", { key: i },
                        react_1["default"].createElement(link_1["default"], { href: link.to, className: "text-[#94979C] hover:text-white text-sm lg:text-base transition capitalize" }, link.name))); })))); }),
                react_1["default"].createElement("div", { className: "col-span-1" },
                    react_1["default"].createElement("h3", { className: "text-white text-base lg:text-xl font-medium uppercase tracking-wide" }, "Contact"),
                    react_1["default"].createElement("ul", { className: "mt-4 space-y-3 text-[#94979C]" },
                        react_1["default"].createElement("li", { className: "text-sm lg:text-base" }, "Contact Us"),
                        react_1["default"].createElement("li", { className: "flex items-center gap-3" },
                            react_1["default"].createElement(fa_1.FaPhoneAlt, { className: "text-[#AED8E1]" }),
                            react_1["default"].createElement("span", { className: "text-sm lg:text-base" }, "+020 308 6934")),
                        react_1["default"].createElement("li", { className: "flex items-center gap-3" },
                            react_1["default"].createElement(fa_1.FaEnvelope, { className: "text-[#AED8E1]" }),
                            react_1["default"].createElement("span", { className: "text-sm lg:text-base" }, "hello@brandboosterhq.com")))))),
        react_1["default"].createElement("div", { className: "border-t border-gray-800 py-6 px-6 lg:px-20 max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4" },
            react_1["default"].createElement("p", { className: "text-[#94979C] text-xs md:text-base text-center md:text-left" }, "Copyright \u00A9 2020-2025 Liplyn Information Group."),
            react_1["default"].createElement("ul", { className: "flex items-center gap-6" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(image_1["default"], { src: twitter_png_1["default"], alt: "Twitter", className: "h-5 w-auto" })),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(image_1["default"], { src: link_png_1["default"], alt: "LinkedIn", className: "h-5 w-auto" })),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(image_1["default"], { src: face_png_1["default"], alt: "Facebook", className: "h-5 w-auto" })),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(image_1["default"], { src: insta_png_1["default"], alt: "Instagram", className: "h-5 w-auto" }))))));
};
exports["default"] = Footer;
