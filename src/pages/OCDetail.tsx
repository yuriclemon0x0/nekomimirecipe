import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ocs } from '../data/ocs'
import type { FoodItem } from '../data/ocs'
import FoodCard from '../components/FoodCard'
import RecipeModal from '../components/RecipeModal'
import SpeechBubble from '../components/SpeechBubble'

type TabType = 'all' | 'food' | 'drink' | 'dessert' | 'snack'

const tabs: { id: TabType; label: string }[] = [
  { id: 'all', label: 'すべて' },
  { id: 'food', label: 'フード' },
  { id: 'drink', label: 'ドリンク' },
  { id: 'dessert', label: 'デザート' },
  { id: 'snack', label: 'おやつ' },
]

export default function OCDetail() {
  const { id } = useParams<{ id: string }>()
  const oc = ocs.find(o => o.id === id)
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)
  const [tab, setTab] = useState<TabType>('all')

  if (!oc) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🙀</p>
        <p className="text-gray-500">そのキャラクターは見つかりませんでした</p>
        <Link to="/" className="mt-4 inline-block text-pink-500 hover:underline">← ホームに戻る</Link>
      </div>
    )
  }

  const filteredFoods = tab === 'all' ? oc.foods : oc.foods.filter(f => f.type === tab)
  const availableTabs = tabs.filter(t => t.id === 'all' || oc.foods.some(f => f.type === t.id))

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors">
        ← 一覧に戻る
      </Link>

      <div
        className="rounded-3xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-6"
        style={{ background: `linear-gradient(135deg, ${oc.color.veryLight}, ${oc.color.light}50)` }}
      >
        <div className="flex-shrink-0">
          {oc.chibiFaceUrl ? (
            <img
              src={oc.chibiFaceUrl}
              alt={oc.name}
              className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
              style={{ borderColor: oc.color.primary }}
            />
          ) : (
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-7xl border-4 shadow-lg"
              style={{ backgroundColor: oc.color.veryLight, borderColor: oc.color.primary }}
            >
              {oc.emoji}
            </div>
          )}
        </div>

        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm text-gray-400 mb-1">{oc.nameKana}</p>
          <h1 className="text-3xl font-bold mb-2" style={{ color: oc.color.primary }}>{oc.name}</h1>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">{oc.description}</p>
          <SpeechBubble
            text={oc.catchphrase}
            color={oc.color.primary}
            colorLight={oc.color.light}
            direction="top-left"
            className="max-w-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: '登録アイテム', value: oc.foods.length },
          { label: 'レシピあり', value: oc.foods.filter(f => f.recipe).length },
          { label: '種類', value: new Set(oc.foods.map(f => f.type)).size },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-4 text-center border-2"
            style={{ borderColor: oc.color.light }}
          >
            <p className="text-2xl font-bold" style={{ color: oc.color.primary }}>{value}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-lg font-bold text-gray-700 mb-4">🍽 好きなものリスト</h2>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {availableTabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                tab === t.id ? 'text-white shadow-md' : 'bg-white text-gray-500 border-2'
              }`}
              style={
                tab === t.id
                  ? { backgroundColor: oc.color.primary }
                  : { borderColor: oc.color.light }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {filteredFoods.length === 0 ? (
          <p className="text-center text-gray-400 py-12">このカテゴリにはまだ登録がありません</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFoods.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                color={oc.color}
                onRecipeClick={setSelectedFood}
              />
            ))}
          </div>
        )}
      </section>

      {selectedFood && (
        <RecipeModal
          food={selectedFood}
          color={oc.color}
          ocName={oc.name}
          onClose={() => setSelectedFood(null)}
        />
      )}
    </div>
  )
}
