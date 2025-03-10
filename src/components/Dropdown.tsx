"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const options = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "2nd Chance Men", value: "2nd-chance-men" },
  { label: "2nd Chance Women", value: "2nd-chance-women" },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setIsOpen(false)}></div>}

      <button
        onClick={toggleDropdown}
        className="relative z-20 px-3 py-2 min-w-48 bg-orange-500 text-white font-bold rounded-xs flex items-center gap-2 shadow-sm border-2 border-auburn">
        <span className="flex-grow text-left">{options.find((opt) => opt.value === selected)?.label}</span>
        {!isOpen && (
          <span className="text-white">
            <IoIosArrowDown className="text-xl" />
          </span>
        )}
      </button>

      {isOpen && (
        <ul className="absolute top-0 left-0 w-48 bg-[#969290] border-2 border-auburn rounded-xs shadow-lg overflow-hidden z-20">
          {options.map(({ label, value }) => (
            <li
              key={value}
              className={`px-3 py-2 hover:bg-orange-500 text-white font-bold border-b-2 border-auburn cursor-pointer last:border-b-0 ${
                value === selected && "bg-orange-500"
              }`}
              onClick={() => selectOption(value)}>
              <span className="text-[clamp(0.5rem, 1vw, 1rem)]">{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
