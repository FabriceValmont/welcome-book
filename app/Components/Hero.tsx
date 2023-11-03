import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className="flex">
      <div className="flex basis-1/2 gap-[10px]">
        <Image className="" src="/ImageHero.png" alt='ImageHero' width={720} height={689}/>
      </div>
      <div className="flex basis-1/2 flex-col px-[42px] py-[80px] gap-[32px]">
        <h1 className="font-ultra text-[64px] text-color-black-modify">Bienvenue chez 900.care !</h1>
        <p className="font-poppins text-[20px] text-color-black-modify">Si vous lisez ce livret, c’est que vous avez décidé de faire un “happy change” dans votre salle de bain : de réduire vos déchets plastiques, de transporter moins d’eau pour rien, de consommer local et de lutter contre la surproduction. Et pour cela on vous dit...</p>
        <h2 className="font-ultra2 text-[24px] text-color-black-modify">Merci, bravo et BIENVENUE !</h2>
        <p className="font-poppins text-[20px] text-color-black-modify">Chez 900.care, notre mission c’est de vous faire ADORER nos produits d’hygiène et de soins rechargeables pour que vous disiez bye-bye au plastique jetable. Nous avons créé pour vous (et avec vous !) des produits très naturels, qui sentent bon, qui moussent quand il faut, qui respectent votre peau, vos cheveux, vos dents et votre santé. Tout cela, en vous apportant un vrai moment de PLAISIR !</p>
      </div>
    </main>
  )
}
export default Hero;