import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ShieldCheckIcon, PaintbrushIcon, HomeIcon, ArrowRightIcon } from '../components/icons';

export default function DesignAPage() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-xl">N</div>
            <span className="text-xl font-bold tracking-wide text-blue-900">ネモト塗装工業</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-blue-900 transition-colors">強み</Link>
            <Link href="#" className="hover:text-blue-900 transition-colors">サービス</Link>
            <Link href="#" className="hover:text-blue-900 transition-colors">施工事例</Link>
            <Link href="#" className="hover:text-blue-900 transition-colors">会社案内</Link>
          </nav>

          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-slate-500">お気軽にご相談ください</span>
            <div className="flex items-center gap-2 text-blue-900 font-bold text-lg leading-none">
              <PhoneIcon className="w-5 h-5" />
              0120-437-770
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-900 text-white overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-900 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1e293b/white?text=Hero+Image')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in-up">
            <h2 className="text-lg md:text-xl font-medium mb-4 text-blue-200 tracking-wider">静岡県沼津市の塗装・防水プロ集団</h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 font-serif">
              妥協なしの施工で<br />
              プライドを持って<br />
              塗装いたします
            </h1>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
              お客様に長期間にわたって喜んでいただける、妥協のない職人の集団です。
              完全自社施工で、納得の仕上がりをお約束します。
            </p>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded font-bold hover:bg-blue-50 transition-colors">
              無料お見積り・ご相談
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strong Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">ネモト塗装の強み</h2>
            <p className="text-slate-500">選ばれ続ける理由があります</p>
            <div className="w-16 h-1 bg-blue-900 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="w-12 h-12 text-blue-900" />,
                title: "完全自社施工",
                desc: "下請けを使わず、経験豊富な自社職人が責任を持って施工します。中間マージンをカットし適正価格を実現。"
              },
              {
                icon: <PaintbrushIcon className="w-12 h-12 text-blue-900" />,
                title: "妥協のない職人魂",
                desc: "「塗装をするならおたくに」と言われる理由。見えない下地処理から仕上げまで、一切の手抜きを許しません。"
              },
              {
                icon: <MapPinIcon className="w-12 h-12 text-blue-900" />,
                title: "地域密着・迅速対応",
                desc: "沼津市・三島市を中心に静岡県東部エリアに対応。何かあった時にすぐに駆けつけられる距離感を大切にしています。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">塗装サービス</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                外壁・屋根塗装から防水工事まで、お家のメンテナンスに関することなら何でもご相談ください。
                専門店の知識と技術で、お客様の大切なお住まいを守ります。
              </p>
              <Link href="#" className="text-blue-900 font-bold hover:underline flex items-center gap-2">
                サービス詳細を見る <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "外壁塗装", desc: "美観だけでなく、建物を保護するための最適な塗料と工法をご提案します。", color: "bg-blue-600" },
                { title: "屋根塗装", desc: "過酷な環境から家を守る屋根。遮熱塗料など機能性塗料もお任せください。", color: "bg-slate-600" },
                { title: "防水塗装", desc: "ベランダや屋上の雨漏りを防ぎます。原因特定から早期解決まで対応。", color: "bg-teal-600" }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded shadow-sm overflow-hidden group cursor-pointer">
                  <div className={`h-40 ${service.color} flex items-center justify-center`}>
                     <HomeIcon className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">施工事例</h2>
              <p className="text-slate-500">実績の一部をご紹介します</p>
            </div>
            <Link href="#" className="hidden md:block text-slate-500 hover:text-blue-900">もっと見る &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-slate-200 rounded overflow-hidden mb-3 relative">
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
                   {/* Placeholder for image */}
                   <div className="w-full h-full flex items-center justify-center text-slate-400">Image</div>
                </div>
                <p className="text-xs text-slate-500 mb-1">2025.09.17</p>
                <h3 className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">沼津市 {String.fromCharCode(65+i)}様邸 外壁・屋根塗装</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer Area */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-900 font-bold">N</div>
                <span className="text-xl font-bold text-white">ネモト塗装工業</span>
              </div>
              <p className="mb-6 leading-relaxed text-sm">
                〒410-0821 静岡県沼津市大平2102-1<br />
                静岡県知事許可（般-29）第038864号
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-900 transition-colors">X</a>
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-900 transition-colors">I</a>
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-900 transition-colors">F</a>
              </div>
            </div>
            
            <div className="bg-blue-900/50 p-8 rounded-lg border border-blue-800">
              <h3 className="text-white font-bold text-xl mb-4">無料ご相談・お見積り</h3>
              <p className="text-sm mb-6">お急ぎの方はお電話にてお気軽にご連絡ください。</p>
              <div className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                <PhoneIcon className="w-6 h-6" />
                0120-437-770
              </div>
              <p className="text-xs text-blue-200 mb-6">営業時間 8:30～18:00（日祝を除く）</p>
              <button className="w-full bg-white text-blue-900 font-bold py-3 rounded hover:bg-blue-50 transition-colors">
                Webからのお問い合わせ
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-xs text-slate-500">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white">会社案内</a>
              <a href="#" className="hover:text-white">プライバシーポリシー</a>
              <a href="#" className="hover:text-white">サイトマップ</a>
            </div>
            <p>&copy; Nemoto Painting Industry. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

