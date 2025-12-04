import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MailIcon, CheckIcon, MapPinIcon, HomeIcon, ArrowRightIcon } from '../components/icons';

// Additional Icon specific for this design
const CheckIconCustom = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function DesignBPage() {
  return (
    <div className="min-h-screen font-sans text-stone-700 bg-[#fffbf5]">
      {/* Top Bar */}
      <div className="bg-[#fcd34d] text-stone-800 py-2 text-sm text-center font-medium">
        静岡県沼津市・三島市の外壁塗装ならお任せください！
      </div>

      {/* Header */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-orange-600 font-bold tracking-wider">創業XX年 信頼の実績</span>
            <h1 className="text-2xl font-extrabold text-stone-800">ネモト塗装工業</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-stone-500">お見積り・ご相談は無料です</p>
              <div className="flex items-center gap-1 text-xl font-bold text-orange-500">
                <PhoneIcon className="w-5 h-5" />
                <span>0120-437-770</span>
              </div>
            </div>
            <Link href="#" className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md flex items-center gap-2">
              <MailIcon className="w-4 h-4" />
              メールで相談
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-stone-100 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex gap-8 text-sm font-medium text-stone-600">
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">ホーム</Link></li>
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">初めての方へ</Link></li>
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">サービス案内</Link></li>
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">施工事例</Link></li>
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">お客様の声</Link></li>
            <li><Link href="#" className="block py-3 border-b-2 border-transparent hover:border-orange-400 hover:text-orange-500">会社概要</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-100 rounded-l-[100px] -z-10 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="inline-block bg-white border border-orange-200 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-sm">
              地域密着の塗装店
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
              笑顔あふれる<br />
              お住まいづくりを<br />
              <span className="text-orange-500">色</span>でお手伝い。
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              ネモト塗装工業は、お客様との対話を大切にする職人直営店です。
              「頼んでよかった」と言っていただけるよう、一塗り一塗り心を込めて施工します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                無料診断・お見積り
              </Link>
              <Link href="#" className="bg-white text-stone-600 border border-stone-200 px-8 py-4 rounded-full font-bold text-center hover:bg-stone-50 transition-colors">
                施工事例を見る
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square bg-stone-200 rounded-[2rem] overflow-hidden shadow-xl relative rotate-2 hover:rotate-0 transition-transform duration-500">
               {/* Placeholder */}
               <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/f97316/white?text=Family+Smile')] bg-cover bg-center"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                 <div className="flex text-yellow-400">★★★★★</div>
                 <span className="text-sm font-bold">4.9/5.0</span>
              </div>
              <p className="text-xs text-stone-500">「とても丁寧な対応で安心しました！」<br/>沼津市 S様</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Promises */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">ネモト塗装 3つの約束</h2>
            <p className="text-stone-500">お客様に安心してご依頼いただくために</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "わかりやすい説明",
                desc: "専門用語は使いません。お家の状態や必要な工事について、写真をお見せしながら丁寧にご説明します。",
                color: "bg-orange-100 text-orange-600"
              },
              {
                title: "近隣への配慮",
                desc: "工事前のご挨拶はもちろん、施工中も音や臭いに配慮し、ご近所様へご迷惑をおかけしないよう徹底します。",
                color: "bg-green-100 text-green-600"
              },
              {
                title: "安心のアフターフォロー",
                desc: "塗って終わりではありません。定期点検や万が一の不具合にも迅速に対応いたします。",
                color: "bg-blue-100 text-blue-600"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#fffbf5] p-8 rounded-2xl hover:bg-[#fff5e6] transition-colors">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mb-6 font-bold text-2xl`}>
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-800">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">メニュー・料金プラン</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
                   <HomeIcon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">外壁塗装プラン</h3>
                <p className="text-sm text-stone-500 mb-6">足場代・洗浄・下地処理・塗装（3回塗り）全て込み</p>
                <p className="text-3xl font-bold text-orange-500 mb-6">
                  <span className="text-sm text-stone-600 font-normal">目安</span> 60<span className="text-lg">万円〜</span>
                </p>
                <ul className="text-left text-sm text-stone-600 mb-8 space-y-2 w-full max-w-xs mx-auto">
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> シリコン塗料使用</li>
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> 耐久年数 10〜12年</li>
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> 工事保証付き</li>
                </ul>
                <Link href="#" className="w-full block bg-stone-100 py-3 rounded-xl font-bold text-stone-600 hover:bg-stone-200 transition-colors">詳細を見る</Link>
             </div>

             <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-500">
                   <CheckIconCustom className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">屋根塗装プラン</h3>
                <p className="text-sm text-stone-500 mb-6">遮熱効果で夏も快適に。耐久性重視の方へ。</p>
                <p className="text-3xl font-bold text-orange-500 mb-6">
                  <span className="text-sm text-stone-600 font-normal">目安</span> 25<span className="text-lg">万円〜</span>
                </p>
                <ul className="text-left text-sm text-stone-600 mb-8 space-y-2 w-full max-w-xs mx-auto">
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> 遮熱シリコン塗料</li>
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> タスペーサー設置込み</li>
                  <li className="flex items-center gap-2"><CheckIconCustom className="w-4 h-4 text-green-500" /> 工事保証付き</li>
                </ul>
                <Link href="#" className="w-full block bg-stone-100 py-3 rounded-xl font-bold text-stone-600 hover:bg-stone-200 transition-colors">詳細を見る</Link>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-12 mt-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">有限会社ネモト塗装工業</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="flex items-center justify-center gap-2">
                 <PhoneIcon className="w-5 h-5" />
                 <span className="text-xl font-bold text-white">0120-437-770</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                 <MapPinIcon className="w-5 h-5" />
                 <span>静岡県沼津市大平2102-1</span>
              </div>
            </div>
            <div className="text-xs text-stone-500">
               &copy; Nemoto Painting Industry.
            </div>
         </div>
      </footer>
    </div>
  );
}

