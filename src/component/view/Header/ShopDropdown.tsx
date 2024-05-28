import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ShopDropdown: React.FC = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownMenu((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setDropdownMenu(true);
  };

  const handleMouseLeave = () => {
    setDropdownMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="flex items-center gap-2 group relative py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <p className="text-lg text-gray-700 font-semibold group-hover:text-primary cursor-pointer">
        Shop
      </p>
      <IoIosArrowDown
        className={`
      text-xl group-hover:text-primary transition duration-300 ease-in-out ${
        dropdownMenu ? "rotate-180 " : ""
      }
      `}
      />

      {dropdownMenu && (
        <div className="absolute top-[60px] left-0 min-w-96 h-96 bg-gray-50 shadow-md rounded-md p-4 border border-gray-100">
          {/* Add your dropdown menu content here */}
          <p>Your dropdown content</p>
        </div>
      )}
    </div>
  );
};

export default ShopDropdown;
