import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MegaphoneIcon, TagIcon, CheckIcon, HomeIcon, ShieldCheckIcon } from '../components/icons';

export default function DesignEPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-3 text-center font-bold animate-pulse">
        <span className="inline-block bg-yellow-400 text-red-900 px-2 rounded mr-2 text-xs">緊急</span>
        沼津市・三島市エリア限定！外壁塗装キャンペーン実施中！
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4 py-2 flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-black text-red-600 italic transform -skew-x-10">
              NEMOTO
              <span className="text-sm text-slate-900 font-bold not-italic ml-2">塗装工業</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
               <span className="bg-yellow-400 text-xs font-bold px-1">見積り無料！</span>
               <div className="text-3xl font-black text-red-600 leading-none flex items-center gap-1">
                 <PhoneIcon className="w-6 h-6" />
                 0120-437-770
               </div>
            </div>
            <Link href="#" className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded font-bold border-b-4 border-red-800 active:border-0 active:translate-y-1 transition-all text-sm md:text-base">
              Web限定割引へ
            </Link>
          </div>
        </div>
      </header>

      {/* Hero / Chirashi Style */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-10 md:py-16 overflow-hidden relative">
        {/* Burst Badge */}
        <div className="absolute top-4 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full text-white flex items-center justify-center font-black text-center p-2 rotate-12 shadow-xl z-10 border-4 border-yellow-400">
          <span className="text-sm md:text-lg leading-tight">地域<br/>No.1<br/>宣言</span>
        </div>

        <div className="container mx-auto px-4">
          <div className="bg-white border-4 border-red-600 p-1 md:p-2 shadow-2xl rounded-xl relative">
             <div className="border-2 border-dashed border-slate-300 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-3/5">
                  <div className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full mb-4">
                    <MegaphoneIcon className="w-4 h-4 inline mr-1" />
                    他社より1円でも高ければご相談ください
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none mb-4">
                    外壁塗装が<br />
                    <span className="text-red-600 text-5xl md:text-7xl">コミコミ価格</span>で<br />
                    この安さ！
                  </h2>
                  <div className="bg-yellow-400 p-4 rounded-lg transform -rotate-1 mb-6 shadow-md">
                    <p className="text-center text-red-900 font-bold text-lg">足場代 + 高圧洗浄 + 下塗り + 中塗り + 上塗り</p>
                    <p className="text-center text-5xl md:text-6xl font-black text-slate-900 mt-2">
                       59.8<span className="text-2xl">万円〜</span>
                    </p>
                    <p className="text-center text-xs text-slate-700 mt-1">※延床30坪の場合の目安です</p>
                  </div>
                </div>
                <div className="md:w-2/5 relative">
                  <div className="aspect-[4/3] bg-slate-200 rounded overflow-hidden border-4 border-slate-100 shadow-inner">
                     <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/ef4444/ffffff?text=Before+After')] bg-cover bg-center"></div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white font-bold px-6 py-2 rounded shadow-lg">
                    自信の自社施工！
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3 Reasons / Points */}
      <section className="py-16 bg-slate-50">
         <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-black text-red-600 mb-12">
              <span className="border-b-4 border-yellow-400 inline-block pb-2">なぜ、こんなに安くて高品質なのか？</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 {
                   title: "仲介手数料 0円",
                   desc: "下請けを使わない完全自社施工だから、余計なマージンを一切カット！",
                   color: "bg-red-500"
                 },
                 {
                   title: "大量仕入れでコスト減",
                   desc: "塗料メーカーとの直接取引により、高品質な塗料を安く仕入れています！",
                   color: "bg-blue-500"
                 },
                 {
                   title: "無駄な営業費カット",
                   desc: "しつこい営業は一切なし。口コミと紹介中心だから広告費も最小限！",
                   color: "bg-green-500"
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-white rounded-lg shadow p-6 border-t-4 border-red-600 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl text-slate-300">
                       {i+1}
                    </div>
                    <h3 className={`text-xl font-black mb-3 ${item.color} text-white inline-block px-3 py-1 rounded transform -skew-x-10`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-700 font-bold leading-relaxed mt-2">
                      {item.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Plan List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-black text-slate-900 text-center mb-10">選べる松竹梅プラン</h2>
           <div className="grid md:grid-cols-3 gap-4">
              {/* Plan 1 */}
              <div className="border-2 border-slate-200 rounded-xl p-4 hover:border-red-400 transition-colors">
                 <div className="bg-slate-600 text-white text-center py-2 font-bold rounded mb-4">エコノミー</div>
                 <h3 className="text-xl font-bold text-center mb-2">シリコン塗装</h3>
                 <div className="text-center text-red-600 font-black text-3xl mb-4">59.8<span className="text-sm text-slate-600">万円〜</span></div>
                 <ul className="space-y-2 text-sm font-bold text-slate-600 mb-6">
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-red-500" /> 耐久年数 10年</li>
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-red-500" /> コスト重視の方に</li>
                 </ul>
                 <button className="w-full bg-slate-100 py-2 rounded font-bold text-slate-600 hover:bg-slate-200">詳しく見る</button>
              </div>
              
              {/* Plan 2 - Recommended */}
              <div className="border-4 border-red-500 rounded-xl p-4 relative bg-red-50 transform md:-translate-y-4 shadow-xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full font-black shadow text-sm">一番人気！</div>
                 <div className="bg-red-600 text-white text-center py-2 font-bold rounded mb-4 mt-2">スタンダード</div>
                 <h3 className="text-xl font-bold text-center mb-2">ラジカル塗装</h3>
                 <div className="text-center text-red-600 font-black text-4xl mb-4">69.8<span className="text-sm text-slate-600">万円〜</span></div>
                 <ul className="space-y-2 text-sm font-bold text-slate-600 mb-6">
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-red-500" /> 耐久年数 12-15年</li>
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-red-500" /> コスパ最強</li>
                 </ul>
                 <button className="w-full bg-red-600 py-3 rounded font-bold text-white hover:bg-red-700 shadow-md">詳しく見る</button>
              </div>

              {/* Plan 3 */}
              <div className="border-2 border-slate-200 rounded-xl p-4 hover:border-blue-400 transition-colors">
                 <div className="bg-blue-600 text-white text-center py-2 font-bold rounded mb-4">プレミアム</div>
                 <h3 className="text-xl font-bold text-center mb-2">フッ素塗装</h3>
                 <div className="text-center text-blue-600 font-black text-3xl mb-4">89.8<span className="text-sm text-slate-600">万円〜</span></div>
                 <ul className="space-y-2 text-sm font-bold text-slate-600 mb-6">
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-blue-500" /> 耐久年数 15-20年</li>
                   <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-blue-500" /> 長持ちさせたい方に</li>
                 </ul>
                 <button className="w-full bg-slate-100 py-2 rounded font-bold text-slate-600 hover:bg-slate-200">詳しく見る</button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="bg-slate-800 text-white py-10 mt-10">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">まずは無料でお見積り！</h3>
            <p className="mb-6">しつこい営業は一切いたしません。お気軽にご相談ください。</p>
            <div className="bg-white text-red-600 inline-block px-8 py-2 rounded-full text-3xl font-black mb-8">
               0120-437-770
            </div>
            <div className="text-xs text-slate-400">
              &copy; Nemoto Painting Industry.
            </div>
         </div>
      </footer>
    </div>
  );
}

