import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-White sticky top-0 z-10 border-b-2 px-[12px]">
        <div className="pt-[16px] pb-[10px]">
            <Image className="" src="/Logo.png" alt="Logo 900Care" width={92} height={39}/>
        </div>
        <div>
            
        </div>
    </header>
  )
}

export default Header