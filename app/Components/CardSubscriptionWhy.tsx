import React from "react"

export default function CardSubscriptionWhy (props : any) {
        
    return (
        <div className="justify-center items-center p-[24px] gap-[10px] rounded-[30px]">
            <p className="text-[32px] text-center font-ultra">{props.item.text1}</p>
            <p className="mt-4 font-bold text-[16px] text-center font-poppins">{props.item.text2}</p>
        </div>
    )
}