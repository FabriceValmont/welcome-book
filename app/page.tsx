import React from "react";
import Hero from "./Components/Hero";
import Planet from "./Components/Planet";
import Subscription from "./Components/Subscription";
import Products900Care from "./Components/Products900Care";

export default function Home() {

  return (
      <main className="text-color-black-modify">
        <Hero />
        <Planet />
        <Subscription />
        <Products900Care />
      </main> 
  );
}