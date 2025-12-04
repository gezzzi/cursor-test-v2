import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon } from '../components/icons';

export default function DesignIPage() {
  return (
    <div className="min-h-screen font-sans bg-zinc-50 text-black overflow-x-hidden">
      {/* Floating Nav */}
      <nav className="fixed top-10 right-10 z-50 mix-blend-difference text-white md:block hidden">
         <ul className="text-right space-y-2 text-sm font-bold uppercase tracking-wider">
            <li><Link href="#" className="hover:line-through decoration-2">Work</Link></li>
            <li><Link href="#" className="hover:line-through decoration-2">About</Link></li>
            <li><Link href="#" className="hover:line-through decoration-2">Contact</Link></li>
         </ul>
      </nav>
      <div className="fixed top-10 left-10 z-50 font-black text-xl tracking-tighter mix-blend-difference text-white">
         N/P
      </div>

      {/* Hero */}
      <section className="min-h-screen relative flex items-center py-20">
         <div className="container mx-auto px-6 relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/5 -skew-x-12 -z-10"></div>
            
            <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-12 relative z-10">
               PAINT<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CRAFT</span><br />
               FUTURE
            </h1>
            
            <div className="md:absolute md:right-20 md:bottom-20 max-w-md bg-white p-8 shadow-2xl border-l-8 border-blue-600">
               <p className="text-lg font-bold mb-4">Nemoto Painting Industry.</p>
               <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  私たちは、既存の枠にとらわれない塗装会社です。<br />
                  圧倒的な技術力と、建築を理解した色彩提案で、<br />
                  あなたの建物を「作品」へと昇華させます。
               </p>
               <Link href="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Explore More <ArrowRightIcon className="w-4 h-4" />
               </Link>
            </div>

            <div className="hidden md:block absolute top-1/4 right-1/4 w-64 h-80 bg-zinc-900 -z-10 rotate-6">
               <div className="w-full h-full opacity-60 bg-[url('https://placehold.co/600x800/222222/444444?text=Texture')] bg-cover bg-center"></div>
            </div>
         </div>
      </section>

      {/* Featured Project (Asymmetric) */}
      <section className="py-32 bg-white relative">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center">
               <div className="md:w-1/2">
                  <div className="aspect-[3/4] bg-zinc-100 relative">
                     <div className="absolute inset-4 bg-zinc-900">
                        <div className="w-full h-full opacity-80 bg-[url('https://placehold.co/800x1000/000000/333333?text=Modern+Architecture')] bg-cover bg-center"></div>
                     </div>
                     {/* Overlapping element */}
                     <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 flex items-center justify-center text-white font-bold text-xl z-10">
                        01
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 pt-10 md:pt-0">
                  <span className="block text-blue-600 font-bold tracking-widest mb-4">LATEST PROJECT</span>
                  <h2 className="text-5xl font-bold mb-8 leading-tight">
                     RESIDENCE<br />IN NUMAZU.
                  </h2>
                  <p className="text-zinc-500 mb-10 leading-loose text-justify">
                     シンプルでありながら、力強い存在感を放つ外観。<br />
                     環境に調和しつつも、個性を主張する色彩設計。<br />
                     細部まで計算された塗装技術が、建築の美しさを際立たせます。
                  </p>
                  <Link href="#" className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-blue-600 transition-colors">
                     VIEW PROJECT
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Services (Big Type) */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden">
         <div className="container mx-auto px-6 relative">
            <div className="absolute top-0 left-0 text-[20rem] font-black text-zinc-800 leading-none -translate-y-1/2 select-none pointer-events-none">
               WORK
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10 mt-20">
               {[
                  { num: '01', title: 'Exterior', desc: '建物の顔となる外壁を、美しく、強く。' },
                  { num: '02', title: 'Roofing', desc: '見えない場所こそ、最強の保護を。' },
                  { num: '03', title: 'Proofing', desc: '水の侵入を許さない、鉄壁の防水。' },
               ].map((s, i) => (
                  <div key={i} className="border-t border-zinc-700 pt-8 group hover:border-blue-600 transition-colors">
                     <span className="block text-sm font-mono text-zinc-500 mb-6 group-hover:text-blue-600 transition-colors">/ {s.num}</span>
                     <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                     <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                     <div className="mt-8 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ArrowRightIcon className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 bg-blue-600 text-white">
         <div className="container mx-auto px-6 text-center">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                LET'S BUILD<br />SOMETHING GREAT.
             </h2>
             <div className="inline-flex flex-col items-center">
                <p className="text-sm font-bold tracking-widest mb-2">CONTACT US</p>
                <a href="tel:0120437770" className="text-3xl md:text-5xl font-bold border-b-2 border-white pb-2 hover:opacity-70 transition-opacity">
                   0120-437-770
                </a>
             </div>
         </div>
      </section>

      <footer className="bg-zinc-50 py-10 text-center text-xs font-bold text-zinc-300 uppercase tracking-widest">
         (c) 2025 Nemoto Painting Industry.
      </footer>
    </div>
  );
}

