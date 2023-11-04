import React from "react"

export default function CardSubscriptionHowItWork (props : any) {
        
    return (
        <div className="flex flex-col justify-center items-center px-[24px] gap-[10px]">
            <div className="h-[353px] w-[354px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: props.item.color }}>
                <p className="mt-6 text-[64px] text-center font-ultra">{props.item.text1}</p>
                <p className="px-10 text-[32px] text-center font-ultra">{props.item.text2}</p>
                <p className="px-10 py-2 text-[16px] text-center font-poppins">{props.item.text3}</p>
            </div>
        </div>
    )
}