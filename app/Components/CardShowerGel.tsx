import React from "react"

export default function CardShowerGel (props : any) {
        
    return (
        <div className="w-full flex gap-[10px] grid grid-cols-2 grid-rows-1">
            <div className="">
                <img className="" src={props.item.image} width={50} height={150}/>
            </div>
            <div className="w-full py-[12px] w-1/2">
                <div className="h-[48px] w-[48px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/SmallPinkEllipse.png')` }}>
                    <p className="text-[32px] text-center font-ultra text-white">{props.item.step}</p>
                </div>
                <p className="text-[20px] text-center font-poppins">{props.item.text}</p>
            </div>
        </div>
    )
}