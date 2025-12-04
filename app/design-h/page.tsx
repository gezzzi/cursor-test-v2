import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from '../components/icons';

export default function DesignHPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-white bg-black scroll-smooth">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-start mix-blend-difference">
        <div>
           <h1 className="text-2xl font-bold tracking-tight">NEMOTO</h1>
           <p className="text-xs font-medium tracking-widest mt-1">PAINTING INDUSTRY</p>
        </div>
        <div className="flex flex-col items-end gap-1">
           <span className="text-xs font-bold tracking-widest">CONTACT</span>
           <span className="text-xl font-light">0120-437-770</span>
        </div>
      </header>

      {/* Fixed Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 mix-blend-difference">
         <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
         <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
         <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
         <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
      </div>

      {/* Section 1: Hero */}
      <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/111111/666666?text=Artistic+Paint')] bg-cover bg-center opacity-60"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
         
         <div className="relative z-10 text-center max-w-4xl px-6">
            <p className="text-sm md:text-base font-medium tracking-[0.3em] mb-8 text-zinc-300 uppercase animate-fade-in">Numazu, Shizuoka</p>
            <h2 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter mb-12">
               BEYOND<br />
               THE COLORS.
            </h2>
            <Link href="#" className="inline-flex items-center gap-4 border border-white/30 bg-white/10 backdrop-blur px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
               <span className="text-sm font-bold tracking-widest uppercase">View Concept</span>
            </Link>
         </div>

         <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
            <ArrowRightIcon className="w-6 h-6 rotate-90 opacity-70" />
         </div>
      </section>

      {/* Section 2: Works */}
      <section className="h-screen w-full snap-start relative flex items-center overflow-hidden bg-zinc-900">
         <div className="absolute inset-0 flex md:flex-row flex-col">
            <div className="h-1/2 md:h-full md:w-1/2 bg-[url('https://placehold.co/1000x1000/222222/666666?text=Work+01')] bg-cover bg-center group relative">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500"></div>
               <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                  <h3 className="text-4xl font-bold mb-2">RESIDENCE S</h3>
                  <p className="text-sm opacity-70">Numazu City / Exterior</p>
               </div>
            </div>
            <div className="h-1/2 md:h-full md:w-1/2 bg-[url('https://placehold.co/1000x1000/333333/777777?text=Work+02')] bg-cover bg-center group relative">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500"></div>
               <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                  <h3 className="text-4xl font-bold mb-2">VILLA K</h3>
                  <p className="text-sm opacity-70">Mishima City / Renovation</p>
               </div>
            </div>
         </div>
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Link href="#" className="pointer-events-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition-transform shadow-2xl">
               ALL WORKS
            </Link>
         </div>
      </section>

      {/* Section 3: Services */}
      <section className="h-screen w-full snap-start relative flex items-center bg-white text-black">
         <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 opacity-10">SERVICE</h2>
               <h3 className="text-4xl font-bold mb-6 leading-tight">
                  守る、彩る、<br />
                  価値を高める。
               </h3>
               <p className="text-zinc-600 leading-loose mb-10 max-w-md">
                  ネモト塗装工業は、外壁・屋根塗装から防水工事まで、
                  建物のライフサイクルに合わせた最適なメンテナンスを提案します。
                  見えない部分にこそ、私たちの技術が詰まっています。
               </p>
               <Link href="#" className="text-lg font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                  サービス詳細を見る
               </Link>
            </div>
            <div className="grid gap-4">
               {[
                  { title: "EXTERIOR", sub: "外壁塗装" },
                  { title: "ROOFING", sub: "屋根塗装" },
                  { title: "WATERPROOF", sub: "防水工事" },
               ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between border border-zinc-200 p-8 rounded-lg hover:bg-black hover:text-white transition-all cursor-pointer">
                     <div>
                        <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                        <p className="text-xs opacity-60">{item.sub}</p>
                     </div>
                     <ArrowRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Section 4: Contact */}
      <section className="h-screen w-full snap-start relative flex items-center justify-center bg-black">
         <div className="text-center z-10 px-6">
            <p className="text-yellow-500 font-bold tracking-widest mb-6">READY TO START?</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
               <a href="tel:0120437770" className="hover:text-zinc-400 transition-colors">0120-437-770</a>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <Link href="#" className="bg-white text-black px-10 py-5 rounded text-sm font-bold tracking-widest hover:bg-zinc-200 transition-colors uppercase">
                  Contact Form
               </Link>
               <Link href="#" className="border border-zinc-700 text-white px-10 py-5 rounded text-sm font-bold tracking-widest hover:bg-zinc-900 transition-colors uppercase">
                  Company Profile
               </Link>
            </div>
            <footer className="absolute bottom-10 left-0 w-full text-center text-zinc-600 text-xs">
               © Nemoto Painting Industry.
            </footer>
         </div>
      </section>
    </div>
  );
}


