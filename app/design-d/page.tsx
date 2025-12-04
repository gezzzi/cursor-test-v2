import React from 'react';
import Link from 'next/link';
import { PhoneIcon, LeafIcon, SunIcon, HomeIcon, ArrowRightIcon } from '../components/icons';

export default function DesignDPage() {
  return (
    <div className="min-h-screen font-sans text-stone-600 bg-[#f7f9f7]">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2 text-xs text-center font-medium tracking-wider">
        静岡県沼津市の、人と自然にやさしい塗装店
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
               <LeafIcon className="w-6 h-6" />
             </div>
             <div>
               <h1 className="text-xl font-bold text-stone-800 tracking-tight">ネモト塗装工業</h1>
               <p className="text-[10px] text-emerald-600 -mt-1">Natural & Eco Painting</p>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-500 font-medium">
            <Link href="#" className="hover:text-emerald-600 transition-colors">私たちの想い</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">施工メニュー</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">施工実績</Link>
            <Link href="#" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-sm">
              <PhoneIcon className="w-4 h-4" />
              無料相談
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
           {/* Abstract organic shapes */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm text-emerald-600 text-xs font-bold mb-6">
               <SunIcon className="w-4 h-4" />
               家族の健康を守る塗装
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
              深呼吸したくなる<br />
              <span className="text-emerald-600">美しい家</span>へ。
            </h2>
            <p className="text-stone-500 text-lg mb-8 leading-relaxed">
              ネモト塗装工業は、環境と健康に配慮した「エコ塗装」を推奨しています。
              長持ちするのはもちろん、家族みんなが安心して暮らせる住まいづくりをお手伝いします。
            </p>
            <div className="flex gap-4">
               <Link href="#" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                 お見積りはこちら
               </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
               <div className="aspect-square bg-stone-200 relative">
                 <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/ecfdf5/047857?text=Nature+Home')] bg-cover bg-center"></div>
               </div>
             </div>
             {/* Floating leaf decoration */}
             <div className="absolute -top-8 -right-8 text-emerald-200">
               <LeafIcon className="w-24 h-24 rotate-12" />
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-stone-800 mb-4">自然と調和する3つのこだわり</h2>
             <p className="text-stone-500">私たちは、塗装を通じて持続可能な社会づくりに貢献します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 icon: <LeafIcon className="w-8 h-8 text-emerald-600" />,
                 title: "環境配慮型塗料",
                 desc: "シックハウス症候群の原因となる物質を含まない、安全性の高い塗料を厳選して使用しています。"
               },
               {
                 icon: <HomeIcon className="w-8 h-8 text-emerald-600" />,
                 title: "建物を長く守る",
                 desc: "適切なメンテナンスで建物の寿命を延ばすことは、廃棄物を減らし地球環境を守ることにつながります。"
               },
               {
                 icon: <SunIcon className="w-8 h-8 text-emerald-600" />,
                 title: "遮熱・断熱効果",
                 desc: "夏は涼しく、冬は暖かい。省エネ効果のある塗装で、CO2削減と光熱費の節約に貢献します。"
               }
             ].map((item, i) => (
               <div key={i} className="bg-[#f7f9f7] p-8 rounded-2xl hover:bg-emerald-50 transition-colors">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto">
                   {item.icon}
                 </div>
                 <h3 className="text-lg font-bold text-stone-800 mb-4 text-center">{item.title}</h3>
                 <p className="text-sm text-stone-500 leading-relaxed text-center">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-emerald-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1920x600/ffffff/000000?text=Pattern')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">お家の健康診断、始めませんか？</h2>
           <p className="text-emerald-100 mb-10 max-w-xl mx-auto">
             外壁や屋根の劣化は、目に見えないところで進行しています。
             早期発見・早期対応が、大切なお家を長持ちさせる秘訣です。
           </p>
           <button className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
             無料診断を申し込む
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f9f7] pt-20 pb-10 border-t border-stone-100">
        <div className="container mx-auto px-4">
           <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                  <LeafIcon className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-stone-800">ネモト塗装工業</span>
              </div>
              <p className="text-stone-500 text-sm mb-8">
                〒410-0821 静岡県沼津市大平2102-1<br />
                TEL: 0120-437-770
              </p>
              <div className="flex gap-6 text-stone-400 text-sm">
                <Link href="#" className="hover:text-emerald-600">Home</Link>
                <Link href="#" className="hover:text-emerald-600">About</Link>
                <Link href="#" className="hover:text-emerald-600">Contact</Link>
              </div>
           </div>
           <div className="mt-12 pt-8 border-t border-stone-200 text-center text-xs text-stone-400">
             &copy; Nemoto Painting Industry. Eco-friendly Painting.
           </div>
        </div>
      </footer>
    </div>
  );
}

