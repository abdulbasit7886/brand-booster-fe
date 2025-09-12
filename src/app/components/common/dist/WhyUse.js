"use strict";
exports.__esModule = true;
var react_1 = require("react");
var magnifier_png_1 = require("../../asset/icons/magnifier.svg");
var pen_png_1 = require("../../asset/icons/pen.svg");
var support_png_1 = require("../../asset/icons/support.svg");
var trust_png_1 = require("../../asset/icons/trust.svg");
var report_png_1 = require("../../asset/icons/report.svg");
var verified_png_1 = require("../../asset/icons/verified.svg");
var image_1 = require("next/image");
var Data = [
  {
    img: magnifier_png_1["default"],
    heading: "seo Experts",
    subtext: "Our stories often outrank your competition.",
  },
  {
    img: pen_png_1["default"],
    heading: "experienced writers",
    subtext: "We write news stories that drive interest and sales.",
  },
  {
    img: support_png_1["default"],
    heading: "helpful support",
    subtext: "50+ Support Guides and Live Chat support.",
  },
  {
    img: trust_png_1["default"],
    heading: "'as seen on ' trust badge",
    subtext: "Build trust and credibility on your website.",
  },
  {
    img: verified_png_1["default"],
    heading: "verified outlets",
    subtext:
      "News sites are verified by social media, SEO stats & FCC registration.",
  },
  {
    img: report_png_1["default"],
    heading: "industry-leading reports",
    subtext:
      "News sites are verified by social media, SEO stats & FCC registration.",
  },
];
var WhyUseCard = function () {
  return react_1["default"].createElement(
    "div",
    { className: "lg:mt-11  flex flex-wrap  gap-6 justify-center px-[2%] " },
    Data.map(function (item, index) {
      return react_1["default"].createElement(
        "div",
        {
          className:
            "lg:w-[28%] w-[96%]  h-auto bg-[#f5f5f5] lg:px-7 lg:py-7 p-3  rounded-2xl lg:space-y-7.5 space-y-6 ",
          key: index,
        },
        react_1["default"].createElement(
          "div",
          { className: " lg:h-11 h-9 w-auto" },
          react_1["default"].createElement(image_1["default"], {
            src: item.img,
            alt: "",
            className: "h-full w-full",
            style: { height: "50px", width: "auto" },
          })
        ),
        react_1["default"].createElement(
          "div",
          { className: "space-y-3" },
          react_1["default"].createElement(
            "h3",
            {
              className:
                "lg:text-4xl text-xl font-futura font-bold uppercase text-blue-900 ",
            },
            item.heading
          ),
          react_1["default"].createElement(
            "p",
            { className: "lg:text-lg text-sm text-textB " },
            item.subtext
          )
        )
      );
    })
  );
};
exports["default"] = WhyUseCard;
