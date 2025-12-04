import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">デザイン案の比較</h1>
        <p className="text-slate-600 text-center mb-12">
          ご要望に合わせて9つの異なるテイストのデザイン案を作成しました。<br />
          それぞれのカードをクリックして詳細をご確認ください。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Design A */}
          <Link href="/design-a" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-blue-900 flex items-center justify-center">
              <span className="text-white font-serif text-2xl font-bold">Trust</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">王道・信頼スタイル</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                企業の信頼性と誠実さを重視した、清潔感のあるクラシックなデザイン。幅広い年齢層に安心感を与えます。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-blue-900"></div>
                <div className="w-6 h-6 rounded bg-white border border-slate-200"></div>
                <div className="w-6 h-6 rounded bg-slate-500"></div>
              </div>
            </div>
          </Link>

          {/* Design B */}
          <Link href="/design-b" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-[#fffbf5] flex items-center justify-center border-b border-orange-100">
              <span className="text-orange-500 font-sans text-2xl font-bold">Friendly</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">親しみ・温もりスタイル</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                地域密着の温かさを表現した、柔らかく相談しやすいデザイン。女性や主婦層にも好印象を与えます。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-orange-500"></div>
                <div className="w-6 h-6 rounded bg-[#fffbf5] border border-orange-100"></div>
                <div className="w-6 h-6 rounded bg-green-500"></div>
              </div>
            </div>
          </Link>

          {/* Design C */}
          <Link href="/design-c" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-zinc-50 flex items-center justify-center border-b border-zinc-100">
              <span className="text-black font-bold text-2xl tracking-tighter uppercase">Modern</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-yellow-600 transition-colors">モダン・プロフェッショナル</h2>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                技術力の高さをアピールする、白を基調とした洗練されたデザイン。余白を活かし、専門性を強調します。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-white border border-zinc-200"></div>
                <div className="w-6 h-6 rounded bg-black"></div>
                <div className="w-6 h-6 rounded bg-yellow-500"></div>
              </div>
            </div>
          </Link>

          {/* Design D */}
          <Link href="/design-d" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-emerald-50 flex items-center justify-center border-b border-emerald-100">
              <span className="text-emerald-600 font-bold text-2xl tracking-wide">Nature</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-600 transition-colors">エコ・自然派スタイル</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                「家族の健康」や「環境への配慮」をテーマにした、爽やかでクリーンなデザイン。安心・安全を訴求します。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-emerald-600"></div>
                <div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-100"></div>
                <div className="w-6 h-6 rounded bg-white border border-slate-200"></div>
              </div>
            </div>
          </Link>

          {/* Design E */}
          <Link href="/design-e" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-red-50 flex items-center justify-center border-b border-red-100">
              <span className="text-red-600 font-black text-3xl italic transform -skew-x-10">IMPACT</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">インパクト・チラシ風</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                「価格の安さ」や「お得感」を全面的に押し出した、エネルギッシュなデザイン。反響率重視の構成です。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-red-600"></div>
                <div className="w-6 h-6 rounded bg-yellow-400"></div>
                <div className="w-6 h-6 rounded bg-white border border-slate-200"></div>
              </div>
            </div>
          </Link>

          {/* Design F */}
          <Link href="/design-f" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-indigo-900 flex items-center justify-center">
              <span className="text-white font-serif text-2xl font-bold tracking-widest writing-vertical-rl h-20">和・匠</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-900 transition-colors">和モダン・伝統スタイル</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                「職人の技」や「歴史」を感じさせる、落ち着きのある和風モダン。高級感と重厚感を演出します。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-indigo-900"></div>
                <div className="w-6 h-6 rounded bg-stone-100 border border-stone-200"></div>
                <div className="w-6 h-6 rounded bg-stone-800"></div>
              </div>
            </div>
          </Link>

          {/* Design G */}
          <Link href="/design-g" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-zinc-50 flex items-center justify-center border-b border-zinc-200">
              <span className="text-zinc-800 font-sans text-2xl font-medium tracking-tight">Grid</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">ミニマル・グリッド</h2>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                情報を整然と整理した、知的でクリーンなデザイン。建築事務所のような洗練された印象を与えます。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-white border border-zinc-200"></div>
                <div className="w-6 h-6 rounded bg-zinc-100 border border-zinc-200"></div>
                <div className="w-6 h-6 rounded bg-zinc-900"></div>
              </div>
            </div>
          </Link>

          {/* Design H */}
          <Link href="/design-h" className="group bg-black rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-800 hover:-translate-y-1">
            <div className="h-32 bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-widest">VISUAL</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-400 transition-colors">フルスクリーン・ビジュアル</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                画面いっぱいに写真を見せる没入型デザイン。施工実績の美しさを最大限にアピールします。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-black border border-zinc-700"></div>
                <div className="w-6 h-6 rounded bg-zinc-800"></div>
                <div className="w-6 h-6 rounded bg-white"></div>
              </div>
            </div>
          </Link>

          {/* Design I */}
          <Link href="/design-i" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-1">
            <div className="h-32 bg-zinc-50 flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 -skew-x-12"></div>
               <span className="text-blue-600 font-black text-3xl tracking-tighter z-10">TYPO.</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">アシンメトリー・タイポ</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                大胆な文字配置と非対称なレイアウト。先進的でクリエイティブな企業イメージを創ります。
              </p>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 rounded bg-blue-600"></div>
                <div className="w-6 h-6 rounded bg-black"></div>
                <div className="w-6 h-6 rounded bg-white border border-slate-200"></div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-sm text-slate-400">
             参考サイト: <a href="https://tosounemoto.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">有限会社ネモト塗装工業</a>
           </p>
        </div>
      </div>
    </main>
  );
}
