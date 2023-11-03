import React from "react"

export default function CardShowerGel (props : any) {
        
    return (
        <div className=" flex flex-wrap gap-[10px]">
            <div className="flex">
                <img src={props.item.image} width={50} height={150}/>
            </div>
            <div className="flex">
                <div className="h-[48px] w-[48px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/SmallPinkEllipse.png')` }}>
                    <p className="text-[32px] text-center font-ultra text-white">{props.item.step}</p>
                </div>
                <p className="text-[20px] text-center font-poppins">{props.item.text}</p>
            </div>
        </div>
    )
}