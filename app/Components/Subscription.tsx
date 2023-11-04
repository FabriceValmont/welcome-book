import React from 'react';
import dataCardSubscriptionWhy from '@/dataCardSubscriptionWhy'
import dataCardSubscriptionHowItWork from '@/dataCardSubscriptionHowItWork'
import CardSubscriptionWhy from './CardSubscriptionWhy'
import CardSubscriptionHowItWork from './CardSubscriptionHowItWork'

const Subscription = () => {

    const cardsSubscriptionWhy= dataCardSubscriptionWhy.map(item => {
        return (
            <CardSubscriptionWhy
                key={item.id}
                item={item}
            />
        )
      })

      const cardsSubscriptionHowItWork= dataCardSubscriptionHowItWork.map(item => {
        return (
            <CardSubscriptionHowItWork
                key={item.id}
                item={item}
            />
        )
      })

  return (
    <main className="flex flex-col items-center gap-[42px] py-[80px] bg-[#E4FFEE]">
        <h1 className="container flex w-[892px] font-ultra text-[64px] text-center text-[#36AB63]">L'abonnement 900% libre, pourquoi ?</h1>
        <h2 className="font-ultra text-[32px] text-center">Pourquoi l'abonnement ?</h2>
        <div className="container flex w-[984px] h-[160px] gap-[42px] grid grid-cols-3">
            {cardsSubscriptionWhy}
        </div>
        <h2 className="mt-28 font-ultra text-[32px] text-center">Comment ça marche ?</h2>
        <div className="container flex w-[952px] h-[388px] gap-[42px] grid grid-cols-2">
            {cardsSubscriptionHowItWork}
        </div>
    </main>
  )
}
export default Subscription;