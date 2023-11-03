import React, { useState } from 'react';
import CardShowerGel from './CardShowerGel';
import dataCardShowerGel from '@/dataCardShowerGel'

const CollapsibleShowerGel = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    const cardsShowerGel= dataCardShowerGel.map(item => {
        return (
            <CardShowerGel
                key={item.id}
                item={item}
            />
        )
      })
  
    return (
        <div className="border-[1px] border-[#BBBABA] rounded-lg">
          <button
            onClick={toggleCollapse}
            className="text-[20px] font-poppins"
          > Comment utiliser mon gel douche ?
            {isCollapsed ? <span className="text-[48px] font-poppins">+</span> : <span className="text-[48px] font-poppins">-</span>}
          </button>
          
          {!isCollapsed && (
            <div className="">
              {cardsShowerGel}
            </div>
          )}
        </div>
      );
    };
  
  export default CollapsibleShowerGel;
  