import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import logo from "../../asset/logo/logo 2.png";
import socialIcon1 from "../../asset/icons/twitter.svg";
import socialIcon2 from "../../asset/icons/link.svg";
import socialIcon3 from "../../asset/icons/face.svg";
import socialIcon4 from "../../asset/icons/insta.svg";

type FooterLink = { to: string; name: string; blank?: boolean };
type FooterSection = { heading: string; links: FooterLink[] };

const footerLinks: FooterSection[] = [
  {
    heading: "Get Started",
    links: [
      { to: "/coming-soon", name: "Account Login" },
      { to: "/coming-soon", name: "Affiliate Program" },
      { to: "/coming-soon", name: "Pricing & Packages" },
      { to: "/coming-soon", name: "Reviews" },
      { to: "/coming-soon", name: "Accepted Topics" },
    ],
  },
  {
    heading: "Free Resources",
    links: [
      { to: "/coming-soon", name: "PR Templates" },
      { to: "/coming-soon", name: "Headline Ideas" },
      { to: "/coming-soon", name: "Writing Guidelines" },
      { to: "/coming-soon", name: "PR Newsletter" },
      { to: "/coming-soon", name: "Marketing Blog" },
      { to: "/coming-soon", name: "Help Center" },
    ],
  },
  {
    heading: "Policies",
    links: [
      {
        to: "https://liplynig.com/general-terms",
        name: "Terms of Service",
        blank: true,
      },
      {
        to: "https://liplynig.com/privacy-policy",
        name: "Privacy Policy",
        blank: true,
      },
      {
        to: "https://liplynig.com/general-terms",
        name: "Refund Policy",
        blank: true,
      },
      // { to: "/coming-soon", name: "Cookie Policy" },
      {
        to: "https://liplynig.com/cookie-policy",
        name: "Cookie Consent",
        blank: true,
      },
      {
        to: "https://liplynig.com/disclaimer",
        name: "Disclaimer",
        blank: true,
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0E12] text-white w-full mt-10">
      {/* Main container centered for 1920px desktop */}
      <div className="max-w-full mx-auto px-6 lg:pl-20 lg:pr-16 md:pr-0 py-16">
        {/* GRID: mobile => 2 cols (so 2 items per row); lg => 5 cols (logo + 3 sections + contact) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + address: full width on mobile (col-span-2), single column on lg */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Image src={logo} alt="Brand Logo" className="h-8 w-auto" />
            <p className="text-[#94979C] leading-7 text-sm sm:text-base">
              <Link href={"http://www.liplynig.com"}>
                Liplyn Information Group
              </Link>{" "}
              <br />
              Marathon 9a, 1213 PE Hilversum, <br />
              The Netherlands
            </p>
          </div>

          {/* Map the footer link sections. Each will occupy 1 column (col-span-1) */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white text-base xl:text-xl font-medium uppercase tracking-wide">
                {section.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.to}
                      target={link?.blank ? "_blank" : "_self"}
                      rel={link?.blank ? "noopener noreferrer" : undefined}
                      className="text-[#94979C] hover:text-white text-sm lg:text-[14px] 2xl:text-base transition capitalize"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact: will be the last column on desktop, and one of the two items on mobile rows */}
          <div className="col-span-1">
            <h3 className="text-white text-base 2xl:text-xl font-medium uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-[#94979C]">
              <li className="text-sm lg:text-base">Contact Us</li>
              <li className="flex items-center 2xl:gap-3 lg:gap-1 gap-3">
                <FaPhoneAlt className="text-[#AED8E1]" />
                <span className="text-sm lg:text-[14px] 2xl:text-base">+020 308 6934</span>
              </li>
              <li className="flex items-center 2xl:gap-3 lg:gap-1 gap-3">
                <FaEnvelope className="text-[#AED8E1]  " />
                <span className="text-sm lg:text-[14px] 2xl:text-base">
                  hello@brandboosterhq.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar: copyright + social icons */}
      <div className="border-t border-gray-800 py-6 px-6 lg:px-20 max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#94979C] text-xs md:text-base text-center md:text-left">
          Copyright © 2020-2025 Liplyn Information Group.
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <Image src={socialIcon1} alt="Twitter" className="h-5 w-auto" />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/brandboosterhq",
                "_blank"
              )
            }
          >
            <Image src={socialIcon2} alt="LinkedIn" className="h-5 w-auto" />
          </li>
          <li>
            <Image src={socialIcon3} alt="Facebook" className="h-5 w-auto" />
          </li>
          <li>
            <Image src={socialIcon4} alt="Instagram" className="h-5 w-auto" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
