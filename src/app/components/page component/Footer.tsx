import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import logo from "../../asset/logo/logo 2.png";
import socialIcon1 from "../../asset/icons/twitter.svg";
import socialIcon2 from "../../asset/icons/link.svg";
import socialIcon3 from "../../asset/icons/face.svg";
import socialIcon4 from "../../asset/icons/insta.svg";

type FooterLink = { to: string; name: string };
type FooterSection = { heading: string; links: FooterLink[] };

const footerLinks: FooterSection[] = [
  {
    heading: "Get Started",
    links: [
      { to: "", name: "Account Login" },
      { to: "", name: "Affiliate Program" },
      { to: "", name: "Pricing & Packages" },
      { to: "", name: "Reviews" },
      { to: "", name: "Accepted Topics" },
    ],
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
    ],
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
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0E12] text-white w-full mt-10">
      {/* Main container centered for 1920px desktop */}
      <div className="max-w-full mx-auto px-6 lg:px-20 py-16">
        {/* GRID: mobile => 2 cols (so 2 items per row); lg => 5 cols (logo + 3 sections + contact) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + address: full width on mobile (col-span-2), single column on lg */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Image src={logo} alt="Brand Logo" className="h-8 w-auto" />
            <p className="text-[#94979C] leading-7 text-sm sm:text-base">
              Liplyn Information Group <br />
              Marathon 9a, 1213 PE Hilversum, <br />
              The Netherlands
            </p>
          </div>

          {/* Map the footer link sections. Each will occupy 1 column (col-span-1) */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white text-base lg:text-xl font-medium uppercase tracking-wide">
                {section.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.to}
                      className="text-[#94979C] hover:text-white text-sm lg:text-base transition capitalize"
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
            <h3 className="text-white text-base lg:text-xl font-medium uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-[#94979C]">
              <li className="text-sm lg:text-base">Contact Us</li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#AED8E1]" />
                <span className="text-sm lg:text-base">+020 308 6934</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#AED8E1]" />
                <span className="text-sm lg:text-base">
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
          <li>
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
