import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Define the Navlink type (you can remove the import if this is the same)
type Navlink = {
  name: string;
  to?: string;
};

type DropDownProps = {
  links: Navlink[];
};

const Dropdown: React.FC<DropDownProps> = ({ links }) => {
  const [selected, setSelected] = useState<Navlink>(links[0]);
  const [open, setOpen] = useState(false);

  const handleOpenDrop = () => {
    setOpen(!open);
  };

  const handleItemClick = (item: Navlink) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <>
      <div className="md:hidden flex items-center w-[90%] mx-auto h-14 bg-white rounded-xl border-1 border-[#D5D7DA] shadow-xs shadow-[#0A0D120D]">
        <div
          className="flex items-center justify-between px-3.5 w-full cursor-pointer"
          onClick={handleOpenDrop}
          role="button"
          tabIndex={0}
         
        >
          <span className="text-lg capitalize">{selected.name}</span>
          <FaChevronDown
            className={`text-textB transition-all ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      {open && (
        <ul
          className={`bg-white px-3 py-2 mt-3 w-[90%] mx-auto rounded-xl transition-all space-y-2 duration-300 ease-in-out transform ${
            open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          {links.map((item, index) => (
            <li
              onClick={() => handleItemClick(item)}
              key={index}
              className="py-3 px-2 transition-all hover:bg-body capitalize rounded-lg cursor-pointer"
              role="menuitem"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleItemClick(item);
                  e.preventDefault();
                }
              }}
            >
              {/* Make items clickable links if they have a 'to' property */}
              {item.to ? (
                <Link href={item.to} className="block w-full">
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;