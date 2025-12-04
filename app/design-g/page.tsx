import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from '../components/icons';

export default function DesignGPage() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 bg-white">
      {/* Grid Lines Background (Pseudo) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-0 max-w-7xl mx-auto left-0 right-0">
        <div className="w-px h-full bg-zinc-100"></div>
        <div className="w-px h-full bg-zinc-100"></div>
        <div className="w-px h-full bg-zinc-100"></div>
        <div className="w-px h-full bg-zinc-100 hidden md:block"></div>
        <div className="w-px h-full bg-zinc-100 hidden md:block"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter uppercase">Nemoto<span className="text-zinc-400">.Inc</span></h1>
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
            <Link href="#" className="hover:text-zinc-500 transition-colors">Projects</Link>
            <Link href="#" className="hover:text-zinc-500 transition-colors">Services</Link>
            <Link href="#" className="hover:text-zinc-500 transition-colors">Studio</Link>
          </nav>
          <Link href="#" className="text-xs font-bold border border-zinc-900 px-4 py-2 hover:bg-zinc-900 hover:text-white transition-colors">
            CONTACT
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-zinc-200 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
             <div className="md:col-span-8">
                <p className="text-xs font-medium text-zinc-400 mb-6 tracking-widest uppercase">Premium Painting Service</p>
                <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
                  Refining<br />
                  Living Spaces.
                </h2>
             </div>
             <div className="md:col-span-4 flex flex-col justify-end pb-2">
                <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                  空間の質を高める、洗練された塗装技術。<br />
                  私たちは、建物の美しさと機能性を<br />
                  ミニマルなアプローチで最大化します。
                </p>
                <div className="h-px w-full bg-zinc-200 mb-4"></div>
                <div className="flex justify-between items-center text-xs font-bold uppercase">
                   <span>Scroll Down</span>
                   <ArrowRightIcon className="w-4 h-4 rotate-90" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="border-b border-zinc-200 z-10 relative bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2">
               {[
                 { id: '01', name: 'Private House N', loc: 'Numazu', img: 'https://placehold.co/800x800/f4f4f5/52525b?text=Minimal+Ext' },
                 { id: '02', name: 'Villa M', loc: 'Mishima', img: 'https://placehold.co/800x800/e4e4e7/52525b?text=Concrete' },
                 { id: '03', name: 'Office S', loc: 'Shizuoka', img: 'https://placehold.co/800x800/d4d4d8/52525b?text=Texture' },
                 { id: '04', name: 'Store K', loc: 'Kannami', img: 'https://placehold.co/800x800/c4c4c7/52525b?text=Detail' },
               ].map((item, i) => (
                 <div key={i} className={`group border-b border-zinc-200 ${i % 2 === 0 ? 'md:border-r' : ''} p-6 md:p-12 hover:bg-zinc-50 transition-colors cursor-pointer`}>
                    <div className="flex justify-between items-start mb-8">
                       <span className="text-xs font-bold text-zinc-400">{item.id}</span>
                       <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </div>
                    <div className="aspect-[4/3] bg-zinc-100 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                    <h3 className="text-xl font-medium mb-1">{item.name}</h3>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">{item.loc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Services List (Accordion style visual) */}
      <section className="border-b border-zinc-200 z-10 relative bg-white">
         <div className="max-w-7xl mx-auto">
            {[
               { en: 'Exterior', jp: '外壁塗装', desc: '建物の表情を整え、保護する' },
               { en: 'Roofing', jp: '屋根塗装', desc: '過酷な環境から暮らしを守る' },
               { en: 'Waterproof', jp: '防水工事', desc: '水の侵入を防ぎ、劣化を抑制する' },
            ].map((service, i) => (
               <div key={i} className="group flex flex-col md:flex-row items-baseline md:items-center justify-between p-6 md:p-10 border-b border-zinc-100 last:border-none hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer">
                  <div className="flex items-baseline gap-6 md:w-1/3">
                     <span className="text-xs font-bold opacity-50">0{i + 1}</span>
                     <h3 className="text-2xl md:text-3xl font-light tracking-tight">{service.en}</h3>
                  </div>
                  <div className="md:w-1/3 mt-2 md:mt-0">
                     <p className="text-sm font-medium opacity-70">{service.jp}</p>
                  </div>
                  <div className="md:w-1/3 flex justify-between items-center mt-2 md:mt-0 w-full">
                     <p className="text-xs opacity-50">{service.desc}</p>
                     <ArrowRightIcon className="w-4 h-4" />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 py-20 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
               <h2 className="text-lg font-bold tracking-tighter uppercase mb-6">Nemoto.Inc</h2>
               <p className="text-xs text-zinc-500 leading-relaxed">
                  〒410-0821<br />
                  静岡県沼津市大平2102-1<br />
                  T. 0120-437-770
               </p>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between">
               <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <Link href="#" className="hover:text-zinc-900">Instagram</Link>
                  <Link href="#" className="hover:text-zinc-900">Twitter</Link>
               </div>
               <p className="text-[10px] text-zinc-400 mt-8">© 2025 Nemoto Painting Industry.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}


