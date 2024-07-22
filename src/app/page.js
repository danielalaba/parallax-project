"use client"
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Parallax pages={8}>
        <ParallaxLayer speed={0.3} className="flex items-center justify-center">
          <h1 className="text-4xl font-extrabold">Scroll Down</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold"> Simple Parallax Effect</h1>
          <h2>Made by Daniel Alaba</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1} sticky={{ start: 1, end: 5.9}} style={{ zIndex: 2 }}>
          <img src="/img/house.png" className="w-screen h-auto" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={1} speed={0.3} style={{backgroundImage: 'url(/img/stars.png)', backgroundSize: 'cover', zIndex: -1}} sticky={{start: 2, end: 3}}/>
        <ParallaxLayer offset={2.5} speed={0.5} className="w-96 flex justify-start items-center ml-96">
          <img src="/img/moon.png" className="w-80 h-auto"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={2} speed={0.5} style={{ backgroundImage: 'url(/img/gradient.png)', backgroundSize: 'cover'}}/>
        <ParallaxLayer offset={4.5} factor={2.5} speed={0.5} className="bg-white"/>
        <ParallaxLayer offset={4.5} factor={2} speed={0.3} sticky={{start: 4.5, end: 5.5}} style={{ zIndex: 1 }}>
          <img src="/img/clouds.png" className="w-96 h-auto absolute left-10 mt-10"/>
          <img src="/img/clouds.png" className="w-96 h-auto absolute right-40 top-20 mt-10"/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.3} className="w-96 flex justify-start items-center ml-96">
          <img src="/img/sun.png" className="w-80 h-auto"/>
        </ParallaxLayer>
        <ParallaxLayer offset={6} factor={2} speed={0.5} style={{ backgroundImage: 'url(/img/bnw.png)', backgroundSize: 'cover'}}/>
        <ParallaxLayer offset={7} speed={0.3} className="flex justify-center items-center bg-black">
          <h1 className="text-4xl font-extrabold">Thank You for Visiting! ^___^</h1>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
