import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className="flex">
      <div className="w-1/2">
        <Image className="w-full h-full" src="/ImageHero.png" alt='ImageHero' width={720} height={689}/>
      </div>
      <div className="flex flex-col basis-1/2 px-[80px] py-[42px] gap-[32px]">
        <h1 className="font-ultra text-[64px]">Bienvenue chez 900.care !</h1>
        <p className="font-poppins text-[20px]">Si vous lisez ce livret, c’est que vous avez décidé de faire un “happy change” dans votre salle de bain : de réduire vos déchets plastiques, de transporter moins d’eau pour rien, de consommer local et de lutter contre la surproduction. Et pour cela on vous dit...</p>
        <h2 className="font-ultra2 text-[24px]">Merci, bravo et BIENVENUE !</h2>
        <p className="font-poppins text-[20px]">Chez 900.care, notre mission c’est de vous faire ADORER nos produits d’hygiène et de soins rechargeables pour que vous disiez bye-bye au plastique jetable. Nous avons créé pour vous (et avec vous !) des produits très naturels, qui sentent bon, qui moussent quand il faut, qui respectent votre peau, vos cheveux, vos dents et votre santé. Tout cela, en vous apportant un vrai moment de PLAISIR !</p>
      </div>
    </main>
  )
}
export default Hero;