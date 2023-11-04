import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="border-[1px] border-[#BBBABA] px-[24px] py-[12px] font-poppins text-[20px] rounded-[8px] text-center bg-[#FFFFFF] flex items-center"
      >
        Français 🇫🇷 <span className="ml-2"><img src="/ArrowDown.png" alt="ArrowDown" /></span>
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-[#FFFFFF] border-[1px] border-[#BBBABA] px-[24px] py-[12px] font-poppins text-[20px] rounded-[8px] text-center">
          <div className="px-4 py-2">English</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;