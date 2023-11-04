import React, { useState } from 'react';
import { useTranslate } from '../CustomHook/UseTranslation';

const Dropdown = () => {
    const { isTranslated, translateOn, translateOff } = useTranslate(); 
    const [isOpen, setIsOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const translateButton = () => {
    if (isTranslated == false)
        translateOn();
    else if (isTranslated == true)
        translateOff()
  };

  

  return (
    <div className="relative">
      {isTranslated ? <button
        onClick={toggleDropdown}
        className="border-[1px] border-[#BBBABA] px-[24px] py-[12px] font-poppins text-[20px] rounded-[8px] text-center bg-[#FFFFFF] flex items-center">
        English <span className="ml-2"><img src="/ArrowDown.png" alt="ArrowDown" /></span>
      </button> : 
      <button
        onClick={toggleDropdown}
        className="border-[1px] border-[#BBBABA] px-[24px] py-[12px] font-poppins text-[20px] rounded-[8px] text-center bg-[#FFFFFF] flex items-center">
        Français 🇫🇷 <span className="ml-2"><img src="/ArrowDown.png" alt="ArrowDown" /></span>
      </button> }
      {isOpen && (
        <div className="absolute z-10 bg-[#FFFFFF] border-[1px] border-[#BBBABA] px-[24px] py-[12px] font-poppins text-[20px] rounded-[8px] text-center">
          {isTranslated ? <button onClick={translateButton} className="">Français 🇫🇷</button> : <button onClick={translateButton} className="">English</button> }
        </div>
      )}
    </div>
  );
};

export default Dropdown;