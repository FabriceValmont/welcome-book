'use client'

import React from 'react'
import Image from 'next/image';
import DropdownLanguage from './DropdownLanguage';

const Header = () => {
  return (
    <header className="flex items-center bg-[#FFFFFF] sticky top-0 z-10 border-b-[1px] border-[#E3E4E3] px-[12px]">
        <div className="container flex w-[130px] h-[90px] pt-[16px] pb-[10px] gap-[10px] justify-center">
            <Image className="object-contain" src="/Logo.png" alt="Logo 900Care" width={92} height={39} />
        </div>
        <div className="ml-auto px-[20px] pr-[24px] pl-[10px] gap-[16px]">
            <DropdownLanguage />
        </div>
    </header>
  )
}

export default Header