import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, PaintbrushIcon, ArrowRightIcon } from '../components/icons';

export default function DesignFPage() {
  return (
    <div className="min-h-screen font-serif text-stone-800 bg-[#fcfbf9] selection:bg-indigo-900 selection:text-white">
      {/* Vertical Navigation (Desktop) */}
      <nav className="hidden lg:flex fixed left-0 top-0 w-24 h-full bg-indigo-900 text-white flex-col items-center py-10 z-50 border-r border-indigo-950">
        <div className="mb-auto writing-vertical-rl text-2xl font-bold tracking-[0.3em] h-32 flex items-center justify-center border-b border-indigo-700 pb-8">
           ネモト
        </div>
        <div className="flex flex-col gap-12 writing-vertical-rl text-sm tracking-widest items-center opacity-80">
           <Link href="#" className="hover:opacity-100 hover:text-yellow-200 transition-colors py-2">仕事</Link>
           <Link href="#" className="hover:opacity-100 hover:text-yellow-200 transition-colors py-2">信念</Link>
           <Link href="#" className="hover:opacity-100 hover:text-yellow-200 transition-colors py-2">意匠</Link>
           <Link href="#" className="hover:opacity-100 hover:text-yellow-200 transition-colors py-2">会社</Link>
        </div>
        <div className="mt-auto pt-8 border-t border-indigo-700">
           <div className="writing-vertical-rl text-xs tracking-widest">静岡沼津</div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-6 border-b border-stone-200 bg-white sticky top-0 z-40">
         <h1 className="text-xl font-bold text-indigo-900">ネモト塗装工業</h1>
         <button className="text-indigo-900 border border-indigo-900 px-4 py-1 text-sm">Menu</button>
      </header>

      {/* Main Content Wrapper */}
      <div className="lg:pl-24">
        
        {/* Hero */}
        <section className="relative h-[80vh] lg:h-screen flex items-center bg-stone-200 overflow-hidden">
           <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/d6d3d1/78716c?text=Japanese+House')] bg-cover bg-center sepia-[.3]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbf9] via-transparent to-transparent"></div>
           </div>

           <div className="container mx-auto px-6 lg:px-16 relative z-10 flex items-start lg:items-center h-full pt-20 lg:pt-0">
              <div className="flex flex-row-reverse items-start gap-8 lg:gap-16">
                 <h2 className="writing-vertical-rl text-5xl lg:text-7xl font-bold text-stone-900 leading-loose tracking-widest h-[60vh] lg:h-[70vh] flex flex-col justify-center border-l border-stone-300 pl-8 lg:pl-12">
                    <span>一期一会の</span>
                    <span className="mt-8">色を塗る。</span>
                 </h2>
                 <div className="writing-vertical-rl text-sm lg:text-base text-stone-600 leading-loose tracking-widest h-[40vh] lg:h-[50vh] pt-20">
                    <p>住まいの呼吸に耳を澄ませ、</p>
                    <p className="mt-4">時を超えて愛される彩りを。</p>
                    <p className="mt-4">職人の手仕事が、家を守る。</p>
                 </div>
              </div>
           </div>
           
           {/* Hanko / Stamp */}
           <div className="absolute bottom-10 right-6 lg:right-16 border-2 border-red-800 p-2 opacity-80 rotate-3">
              <div className="border border-red-800 p-1 text-red-800 font-bold writing-vertical-rl text-sm leading-none h-16">
                 ネモト塗装
              </div>
           </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-white relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-stone-300"></div>
          <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-center">
             <p className="text-indigo-900 text-xs font-bold tracking-[0.3em] mb-8 uppercase">Philosophy</p>
             <h3 className="text-3xl lg:text-4xl font-bold mb-12 leading-normal text-stone-800">
               古き良きを継承し、<br />
               新しきを創造する。
             </h3>
             <p className="text-stone-600 leading-loose text-justify lg:text-center">
               静岡県沼津市、この地に根ざして数十年。
               私たちは日本の気候風土に適した塗装技術を磨き続けてきました。
               見えない下地の一塗りにこそ、職人の魂が宿る。
               流行を追うだけでなく、10年後、20年後の美しさを見据えた
               「本物」の施工をお届けします。
             </p>
             <div className="mt-16">
                <Link href="#" className="inline-block border-b border-indigo-900 pb-1 text-indigo-900 hover:text-indigo-700 transition-colors tracking-widest">
                  私たちの想い &rarr;
                </Link>
             </div>
          </div>
        </section>

        {/* Works */}
        <section className="py-24 bg-[#fcfbf9]">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex justify-between items-end mb-16 border-b border-stone-300 pb-6">
               <h3 className="text-2xl font-bold text-stone-800">施工事例</h3>
               <Link href="#" className="text-sm text-stone-500 hover:text-indigo-900">すべて見る</Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {[
                 { title: "沼津市 Ｓ邸", sub: "外壁改修・屋根漆喰補修", img: "https://placehold.co/800x600/d6d3d1/78716c?text=Japanese+Exterior" },
                 { title: "三島市 Ｋ邸", sub: "木部あく洗い・保護塗装", img: "https://placehold.co/800x600/e5e5e5/78716c?text=Wood+Texture" },
               ].map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden bg-stone-200 mb-6 shadow-lg">
                       <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 sepia-[.2]" style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                    <h4 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-indigo-900 transition-colors">{item.title}</h4>
                    <p className="text-sm text-stone-500">{item.sub}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-indigo-900 text-white py-24">
           <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                 <h3 className="text-3xl font-bold mb-6">ご相談・お見積り</h3>
                 <p className="text-indigo-200 leading-relaxed mb-8">
                    お住まいの診断は無料です。<br />
                    まずは今の状態を知ることから始めませんか。<br />
                    無理な営業は一切いたしません。
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-indigo-900 px-8 py-4 font-bold hover:bg-indigo-50 transition-colors">
                       資料請求・お問い合わせ
                    </button>
                 </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                 <p className="text-sm tracking-widest mb-4 text-indigo-300">お電話でのご相談</p>
                 <p className="text-5xl lg:text-6xl font-serif mb-4">0120-437-770</p>
                 <p className="text-xs text-indigo-400">受付時間 8:30〜18:00（日祝除く）</p>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#fcfbf9] py-12 text-center text-xs text-stone-400 border-t border-stone-200">
           <p className="mb-4">有限会社ネモト塗装工業 静岡県沼津市大平2102-1</p>
           <p>&copy; Nemoto Painting Industry. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}

