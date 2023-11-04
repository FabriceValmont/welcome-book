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
        <div className="w-[814px] border-[1px] border-[#BBBABA] rounded-lg">
          <button
            onClick={toggleCollapse}
            className="font-bold text-[20px] font-poppins p-4"
          > Comment utiliser mon gel douche ?
          </button>
          <div className="text-[48px] font-poppins text-right">
            {isCollapsed ? "+" : "-"}
          </div>
          {!isCollapsed && (
            <div className="grid grid-cols-2">
              {cardsShowerGel}
            </div>
          )}
        </div>
      );
    };
  
  export default CollapsibleShowerGel;
  