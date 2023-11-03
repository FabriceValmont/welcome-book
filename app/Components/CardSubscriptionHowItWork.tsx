import React from "react"

export default function CardSubscriptionHowItWork (props : any) {
        
    return (
        <div className="justify-center items-center py-[24px] gap-[10px]">
            <div className="h-[353px] w-[354px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/CyanEllipse.png')` }}>
                <p className="text-[64px] text-center font-ultra">{props.item.text1}</p>
                <p className="text-[32px] text-center font-ultra">{props.item.text2}</p>
                <p className="text-[16px] text-center font-poppins">{props.item.text3}</p>
            </div>
        </div>
    )
}