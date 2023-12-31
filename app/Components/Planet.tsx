import React from 'react';
import dataCardPlanet from '@/dataCardPlanet'
import CardPlanet from './CardPlanet'

const Planet = () => {

    const cardsPlanet= dataCardPlanet.map(item => {
        return (
            <CardPlanet
                key={item.id}
                item={item}
            />
        )
      })

  return (
    <main className="flex flex-col items-center gap-[42px] py-[80px] bg-[#FFE967]">
        <h1 className="font-ultra text-[64px] text-center">Meilleur pour notre planète</h1>
        <h3 className="container flex w-[500px] font-ultra2 text-[24px] text-center ">Grâce à l'utilisation des produits 900.care, pour une joyeuse tribu de 4 personnes et par an, c'est plus de :</h3>
      <div className="container flex w-[1126px] h-[273px] gap-[42px] grid grid-cols-4">
        {cardsPlanet}
      </div>
    </main>
  )
}
export default Planet;