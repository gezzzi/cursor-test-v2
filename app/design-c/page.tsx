import React from 'react';
import Link from 'next/link';
import { PhoneIcon, PaintbrushIcon, ArrowRightIcon } from '../components/icons';

export default function DesignCPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-zinc-900 selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter uppercase flex items-end leading-none">
            Nemoto<span className="text-yellow-500 text-3xl">.</span>
          </h1>
          
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <Link href="#" className="hover:text-black transition-colors">About</Link>
            <Link href="#" className="hover:text-black transition-colors">Works</Link>
            <Link href="#" className="hover:text-black transition-colors">Service</Link>
            <Link href="#" className="hover:text-black transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">Inquiries</div>
              <div className="text-lg font-bold font-mono">0120-437-770</div>
            </div>
            <button className="w-12 h-12 bg-black text-white flex flex-col gap-1.5 items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300">
               <span className="block w-6 h-0.5 bg-current"></span>
               <span className="block w-6 h-0.5 bg-current"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Text Decoration */}
        <div className="absolute -right-20 top-1/4 text-[20rem] font-black text-zinc-50 select-none -z-10 rotate-90 opacity-50">
          PAINT
        </div>

        <div className="container mx-auto px-6 relative z-20">
           <div className="grid md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-7">
                <div className="inline-flex items-center gap-3 mb-8 border-l-4 border-yellow-500 pl-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Numazu, Shizuoka</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter text-zinc-900">
                  CRAFT<br />
                  WITH<br />
                  <span className="relative inline-block">
                    PRIDE
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-500/30 -z-10"></span>
                  </span>.
                </h2>
                <p className="text-lg text-zinc-600 max-w-md leading-relaxed mb-12 border-l border-zinc-200 pl-6 ml-2">
                  妥協なき職人技術で、建物の価値を守り抜く。<br />
                  創業から続く「完全自社施工」へのこだわり。
                </p>
                <Link href="#" className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 hover:bg-yellow-500 hover:text-black transition-colors">
                  <span className="text-sm font-bold tracking-widest uppercase">View Projects</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
             
             {/* Hero Image Composition */}
             <div className="md:col-span-5 relative hidden md:block">
                <div className="relative aspect-[3/4] bg-zinc-100">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/800x1200/e4e4e7/a1a1aa?text=Craftsman')] bg-cover bg-center grayscale contrast-125"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-2xl max-w-xs border-l-4 border-yellow-500">
                    <p className="text-3xl font-black mb-1">100%</p>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">In-house Construction</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Concept / About */}
      <section className="py-32 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-6">Our Philosophy</h3>
              <h4 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                WE ARE <br />
                PROFESSIONALS.
              </h4>
              <div className="h-1 w-20 bg-black mb-8"></div>
            </div>
            <div>
              <p className="text-zinc-600 leading-loose mb-8 text-justify">
                私たちネモト塗装工業は、ただ塗るだけではありません。建物の状態を見極め、最適な保護を提供する技術者集団です。下請けを使わない完全自社施工だからこそできる、細部へのこだわりと責任感。それが私たちのプライドです。
              </p>
              <div className="grid grid-cols-1 gap-8 mt-12">
                {[
                  { title: '01. Quality', desc: '妥協のない下地処理と、厳選された塗料選定。見えない部分こそ丁寧に。' },
                  { title: '02. Direct', desc: '中間マージンを排除した適正価格での提供。職人と直接話せる安心感。' },
                  { title: '03. Local', desc: '静岡県東部エリアに密着。何かあった時にすぐに駆けつける距離感。' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group cursor-default">
                    <span className="text-4xl font-black text-zinc-200 group-hover:text-yellow-500 transition-colors">{item.title.split('.')[0]}</span>
                    <div>
                       <h5 className="text-lg font-bold uppercase mb-2 group-hover:text-black transition-colors">{item.title.split('. ')[1]}</h5>
                       <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery - Masonry style */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
             <div>
               <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Selected Works</h3>
               <h2 className="text-4xl font-black">LATEST PROJECTS</h2>
             </div>
             <Link href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
               View All <ArrowRightIcon className="w-4 h-4" />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* Item 1 */}
             <div className="group cursor-pointer">
               <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/800x1000/f4f4f5/52525b?text=Residence+S')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
               </div>
               <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Numazu City</p>
               <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors">RESIDENCE S</h3>
             </div>
             
             {/* Item 2 - Offset */}
             <div className="group cursor-pointer md:mt-20">
               <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/800x1000/e4e4e7/52525b?text=Apartment+K')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
               </div>
               <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Mishima City</p>
               <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors">APARTMENT K</h3>
             </div>

             {/* Item 3 */}
             <div className="group cursor-pointer">
               <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/800x1000/d4d4d8/52525b?text=Building+M')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
               </div>
               <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Susono City</p>
               <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors">BUILDING M</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-12 gap-12">
             <div className="md:col-span-4">
                <h3 className="text-4xl font-bold mb-6">SERVICES</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                  外壁塗装、屋根塗装、防水工事。<br/>
                  建物の寿命を延ばすための<br/>あらゆるソリューションを提供します。
                </p>
                <Link href="#" className="inline-block border border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                   More Details
                </Link>
             </div>
             <div className="md:col-span-8">
               <div className="divide-y divide-zinc-800">
                 {[
                   { name: 'Exterior Painting', jp: '外壁塗装', desc: '美観と保護を両立する最適なプランニング' },
                   { name: 'Roof Painting', jp: '屋根塗装', desc: '遮熱・断熱など機能性塗料もお任せください' },
                   { name: 'Waterproofing', jp: '防水工事', desc: '雨漏りを防ぎ、建物の骨格を守ります' },
                   { name: 'Renovation', jp: 'リフォーム', desc: '塗装以外のメンテナンスもご相談ください' },
                 ].map((s, i) => (
                   <div key={i} className="py-8 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-2xl md:text-3xl font-bold group-hover:text-yellow-500 transition-colors">{s.name}</span>
                          <span className="text-xs text-zinc-500 uppercase border border-zinc-800 px-2 py-0.5 rounded">{s.jp}</span>
                        </div>
                        <p className="text-sm text-zinc-400 group-hover:text-white transition-colors">{s.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black transition-all">
                         <ArrowRightIcon className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-zinc-900 py-20 border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-8">Nemoto<span className="text-yellow-500">.</span></h2>
              <address className="not-italic text-zinc-500 text-sm leading-loose">
                有限会社ネモト塗装工業<br />
                〒410-0821 静岡県沼津市大平2102-1<br />
                静岡県知事許可（般-29）第038864号
              </address>
            </div>
            <div className="flex flex-col items-start md:items-end">
               <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Contact Us</p>
               <a href="tel:0120437770" className="text-4xl md:text-5xl font-black tracking-tighter hover:text-yellow-600 transition-colors">0120-437-770</a>
               <p className="text-sm text-zinc-500 mt-2">8:30 - 18:00 (Sun/Holiday Closed)</p>
               
               <div className="flex gap-8 mt-10">
                 <Link href="#" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Company</Link>
                 <Link href="#" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Privacy</Link>
                 <Link href="#" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Map</Link>
               </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-zinc-100 text-center md:text-left text-xs text-zinc-400 uppercase tracking-widest">
            &copy; Nemoto Painting Industry. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
