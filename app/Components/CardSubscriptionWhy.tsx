import React from "react"

export default function CardSubscriptionWhy (props : any) {
        
    return (
        <div className="justify-center items-center py-[12px] gap-[10px] rounded-[30px]">
            <p className="text-[32px] text-center font-ultra">{props.item.text1}</p>
            <p className="text-[16px] text-center font-poppins">{props.item.text2}</p>
        </div>
    )
}