import React from "react"

export default function CardPlanet (props : any) {
        
    return (
        <div className="mx-auto justify-center items-center px-[12px] gap-[10px] bg-[#FFFBE1] rounded-[30px]">
            <p className=" text-[128px] text-center font-ultra">{props.item.number}</p>
            <p className=" text-[16px] text-center font-poppins">{props.item.text}</p>
        </div>
    )
}