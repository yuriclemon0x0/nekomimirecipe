import { Link } from 'react-router-dom'
import { ocs } from '../data/ocs'
import OCCard from '../components/OCCard'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <p className="text-4xl mb-3">🍱🐱🍰</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">ねこみぞレシピ</h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
          うちのOC達が普段食べてるものや好きな食べ物・飲み物の紹介と、レシピをまとめた個人メモ。
        </p>
      </div>

      <section>
        <h2 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
          <span>✨</span> キャラクター一覧
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ocs.map(oc => (
            <OCCard key={oc.id} oc={oc} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 p-8 text-center">
          <p className="text-3xl mb-3">☕✨</p>
          <h2 className="text-xl font-bold text-gray-800 mb-2">架空コラボカフェ</h2>
          <p className="text-sm text-gray-500 mb-5">もしOC達がコラボカフェを開いたら？そんな妄想メニューを集めたページ</p>
          <Link
            to="/cafe"
            className="inline-block px-8 py-3 rounded-full bg-white text-purple-600 font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            カフェを見る →
          </Link>
        </div>
      </section>
    </div>
  )
}
