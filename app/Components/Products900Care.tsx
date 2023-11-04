'use client'

import React from 'react';
import Image from 'next/image';
import CollapsibleShowerGel from './CollapsibleShowerGel';

const Products900Care = () => {
  return (
    <main className="flex flex-col pt-[40px] gap-[42px]">
      <h1 className="font-ultra text-[64px] text-center">Nos produits à reconstituer</h1>
      <div className="flex justify-center">
        <Image className="" src="/ImageProducts.png" alt='ImageProducts' width={1272} height={820}/>
      </div>
      <div className="flex justify-center py-[20px] px-[42px]">
        <CollapsibleShowerGel />
      </div>
    </main>
  )
}
export default Products900Care;