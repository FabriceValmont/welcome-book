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
    <main className="flex-col gap-[42px] px-[80px] bg-[#E4FFEE]">
        <h1 className="font-ultra text-[64px] text-center text-[#36AB63]">L'abonnement 900% libre, pourquoi ?</h1>
        <h2 className="font-ultra text-[32px] text-center">Pourquoi l'abonnement ?</h2>
        <div className="gap-[42px] grid grid-cols-3">
            {cardsSubscriptionWhy}
        </div>
        <h3 className="font-ultra text-[32px] text-center">Comment ça marche ?</h3>
        <div className="gap-[42px] grid grid-cols-2">
            {cardsSubscriptionHowItWork}
        </div>
    </main>
  )
}
export default Subscription;