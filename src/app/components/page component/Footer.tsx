import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../asset/logo/logo 2.png";
// import { Link } from "react-router-dom";
import socialIcon1 from "../../asset/icons/twitter.png";
import socialIcon2 from "../../asset/icons/link.png";
import socialIcon3 from "../../asset/icons/face.png";
import socialIcon4 from "../../asset/icons/insta.png";
import Image from "next/image";
import Link from "next/link";
type FooterLink = {
  to: string;
  name: string;
};

type FooterSection = {
  heading: string;
  links: FooterLink[];
};

const footerLinks: FooterSection[] = [
  {
    heading: "get started",
    links: [
      { to: "", name: "Account Login" },
      { to: "", name: "Affiliate Program" },
      { to: "", name: "Pricing & Packages" },
      { to: "", name: "Reviews" },
      { to: "", name: "Accepted Topics" },
    ],
  },
  {
    heading: "free resources",
    links: [
      { to: "", name: "PR Template" },
      { to: "", name: "Headline Ideas" },
      { to: "", name: "Writing Guidelines" },
      { to: "", name: "PR Newsletter" },
      { to: "", name: "Marketing Blog" },
      { to: "", name: "Help Center" },
    ],
  },
  {
    heading: "policies",
    links: [
      { to: "", name: "Terms of Services" },
      { to: "", name: "Privacy Policy" },
      { to: "", name: "Refund Policy" },
      { to: "", name: "Cookie Consent" },
      { to: "", name: "Cookie Policy" },
      { to: "", name: "Disclaimer" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-[#0C0E12] w-full mt-30 pt-11 text-white">
      <div className="flex flex-col lg:flex-row  gap-10 lg:gap-15 px-17 pb-30 pt-10 ">
        <div className="w-full lg:w-80 space-y-10">
          <Image src={logo} alt="Brand Logo" className="mb-10 h-17 w-auto" />
          <p className="text-[1rem] md:text-base font-normal tracking-wide text-[#94979C] leading-7">
            Liplyn Information Group <br />
            Marathon 9a, 1213 PE Hilversum <br />
            The Netherlands
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-50  w-full lg:w-auto">
          <div className="flex flex-col justify-between w-[100%] lg:flex-row gap-50">
            {footerLinks.map((section, index) => (
              <div key={index} className="w-[29rem] md:w-auto">
                <h3 className="mb-4 text-xl font-medium leading-5 uppercase tracking-wide text-white">
                  {section.heading}
                </h3>
                <ul className="space-y-5 mt-8">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={""}
                        className="text-lg font-medium   text-gray-400  capitalize"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <h3 className="mb-4 text-xl font-medium uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="text-lg text-[#94979C] font-medium hover:text-[#AED8E1] transition capitalize">
                contact us
              </li>
              <li className="flex items-center gap-3 text-[#94979C] hover:text-white transition">
                <FaPhoneAlt className="text-[#AED8E1] text-sm md:text-base" />
                <span className="text-xl">+020 308 6934</span>
              </li>
              <li className="flex items-center gap-3 text-[#94979C] hover:text-white transition">
                <FaEnvelope className="text-[#AED8E1] " />
                <span className="text-xl">hello@brandboosterhq.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-5 px-5 md:px-20 mt-8 lg:mt-5">
        <span className="text-[#94979C] text-xs md:text-base text-center md:text-left mb-4 md:mb-0">
          Copyright © 2020-2025 Liplyn Information Group.
        </span>

        <div className="hidden md:flex list-none gap-10">
          <li>
            <Image src={socialIcon1} alt="Twitter" className="h-5 w-auto" />
          </li>
          <li>
            <Image src={socialIcon2} alt="LinkedIn" className="h-5 w-auto" />
          </li>
          <li>
            <Image src={socialIcon3} alt="Facebook" className="h-5 w-auto" />
          </li>
          <li>
            <Image src={socialIcon4} alt="Instagram" className="h-5 w-auto" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
