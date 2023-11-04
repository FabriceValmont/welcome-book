'use client'

import React from 'react';
import Image from 'next/image';
import i18next from 'i18next';
import { useTranslate } from '../CustomHook/UseTranslation';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "Bienvenue chez 900.care !": "Welcome to 900.care !",
        "Paragraphe1" : "If you're reading this booklet, it's because you've decided to make a 'happy change' in your bathroom: to reduce your plastic waste, transport less water for nothing, consume locally and fight against overproduction. And that's why we tell you...",
        "Merci, bravo et BIENVENUE !" : "Thank you, bravo and WELCOME!",
        "Paragraphe2": "At 900.care, our mission is to make you LOVE our refillable hygiene and care products, so you can say bye-bye to disposable plastic. We've created for you (and with you!) very natural products that smell good, lather when you need them to, and respect your skin, hair, teeth and health. All this, while giving you a real moment of PLEASURE!",
      }
    }
  }
});

const Hero = () => {
  const { isTranslated } = useTranslate()

  return (
    
    <main className="flex">
      <div className="w-1/2">
        <Image className="w-full h-full" src="/ImageHero.png" alt='ImageHero' width={720} height={689}/>
      </div>
      <div className="flex flex-col basis-1/2 px-[80px] py-[42px] gap-[32px]">
        {isTranslated ? <h1 className="font-ultra text-[64px]">{i18next.t("Bienvenue chez 900.care !")} </h1> : <h1 className="font-ultra text-[64px]">Bienvenue chez 900.care ! </h1>}

        {isTranslated ? <p className="font-poppins text-[20px]">{i18next.t("Paragraphe1")}</p>
        : <p className="font-poppins text-[20px]">Si vous lisez ce livret, c’est que vous avez décidé de faire un “happy change” dans votre salle de bain : de réduire vos déchets plastiques, de transporter moins d’eau pour rien, de consommer local et de lutter contre la surproduction. Et pour cela on vous dit...</p>}

        {isTranslated ? <h2 className="font-ultra2 text-[24px]">{i18next.t("Merci, bravo et BIENVENUE !")}</h2> : <h2 className="font-ultra2 text-[24px]">Merci, bravo et BIENVENUE !</h2>}

        {isTranslated ? <p className="font-poppins text-[20px]">{i18next.t("Paragraphe2")}</p>
        : <p className="font-poppins text-[20px]">Chez 900.care, notre mission c’est de vous faire ADORER nos produits d’hygiène et de soins rechargeables pour que vous disiez bye-bye au plastique jetable. Nous avons créé pour vous (et avec vous !) des produits très naturels, qui sentent bon, qui moussent quand il faut, qui respectent votre peau, vos cheveux, vos dents et votre santé. Tout cela, en vous apportant un vrai moment de PLAISIR !</p>}
      </div>
    </main>
  )
}
export default Hero;