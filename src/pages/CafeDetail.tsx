import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { cafes } from '../data/cafes'
import type { CafeMenuItem } from '../data/cafes'

type CategoryType = 'all' | 'food' | 'drink' | 'dessert'

const categoryTabs: { id: CategoryType; label: string; emoji: string }[] = [
  { id: 'all', label: 'すべて', emoji: '🍽' },
  { id: 'food', label: 'フード', emoji: '🍜' },
  { id: 'drink', label: 'ドリンク', emoji: '☕' },
  { id: 'dessert', label: 'デザート', emoji: '🍰' },
]

function MenuItemCard({ item, themeColor, themeColorLight }: { item: CafeMenuItem; themeColor: string; themeColorLight: string }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
      style={{ borderColor: `${themeColor}30` }}
    >
      <div
        className="h-28 flex items-center justify-center text-5xl"
        style={{ backgroundColor: themeColorLight }}
      >
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <span className="filter drop-shadow-md">{item.emoji}</span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-sm leading-snug">{item.name}</h3>
          <span className="text-sm font-bold flex-shrink-0" style={{ color: themeColor }}>{item.price}</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.description}</p>
        <p className="text-xs" style={{ color: themeColor }}>inspired by {item.inspiredBy}</p>
      </div>
    </div>
  )
}

export default function CafeDetail() {
  const { id } = useParams<{ id: string }>()
  const cafe = cafes.find(c => c.id === id)
  const [category, setCategory] = useState<CategoryType>('all')

  if (!cafe) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🙀</p>
        <p className="text-gray-500">そのカフェは見つかりませんでした</p>
        <Link to="/cafe" className="mt-4 inline-block text-purple-500 hover:underline">← カフェ一覧に戻る</Link>
      </div>
    )
  }

  const filteredItems = category === 'all' ? cafe.menuItems : cafe.menuItems.filter(i => i.category === category)
  const availableTabs = categoryTabs.filter(t => t.id === 'all' || cafe.menuItems.some(i => i.category === t.id))

  const stats = {
    total: cafe.menuItems.length,
    food: cafe.menuItems.filter(i => i.category === 'food').length,
    drink: cafe.menuItems.filter(i => i.category === 'drink').length,
    dessert: cafe.menuItems.filter(i => i.category === 'dessert').length,
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/cafe" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors">
        ← カフェ一覧に戻る
      </Link>

      <div className={`rounded-3xl overflow-hidden mb-8 bg-gradient-to-br ${cafe.bannerGradient} h-52 flex items-center justify-center relative shadow-lg`}>
        {cafe.bannerUrl ? (
          <img src={cafe.bannerUrl} alt={cafe.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-9xl filter drop-shadow-xl">{cafe.bannerEmoji}</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm opacity-80 font-medium">{cafe.subtitle}</p>
          <h1 className="text-3xl font-bold">{cafe.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: '開催期間', value: cafe.period, icon: '📅' },
          { label: '開催場所', value: cafe.location, icon: '📍' },
          { label: 'メニュー数', value: `${stats.total}品`, icon: '📋' },
          { label: 'F / D / デザ', value: `${stats.food} / ${stats.drink} / ${stats.dessert}`, icon: '🍽' },
        ].map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-3 border-2"
            style={{ borderColor: `${cafe.themeColor}20` }}
          >
            <p className="text-lg mb-1">{icon}</p>
            <p className="text-xs text-gray-400 mb-0.5">{label}</p>
            <p className="text-xs font-bold text-gray-700 leading-snug">{value}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-5 mb-8 text-sm leading-relaxed text-gray-600"
        style={{ backgroundColor: cafe.themeColorLight }}
      >
        {cafe.description}
      </div>

      <section>
        <h2 className="text-lg font-bold text-gray-700 mb-4">🍴 メニュー一覧</h2>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {availableTabs.map(t => (
            <button
              key={t.id}
              onClick={() => setCategory(t.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                category === t.id ? 'text-white shadow-md' : 'bg-white text-gray-500 border-2'
              }`}
              style={
                category === t.id
                  ? { backgroundColor: cafe.themeColor }
                  : { borderColor: `${cafe.themeColor}30` }
              }
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-400 py-12">このカテゴリにはメニューがありません</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => (
              <MenuItemCard
                key={item.id}
                item={item}
                themeColor={cafe.themeColor}
                themeColorLight={cafe.themeColorLight}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
