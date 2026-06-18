import { Link } from 'react-router-dom'
import { cafes } from '../data/cafes'

export default function CafeIndex() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <p className="text-4xl mb-3">☕🌟</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">架空コラボカフェ</h1>
        <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
          もしOC達が実際にコラボカフェを開いたら…という妄想から生まれたメニューたち。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map(cafe => (
          <Link
            key={cafe.id}
            to={`/cafe/${cafe.id}`}
            className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`h-44 bg-gradient-to-br ${cafe.bannerGradient} flex items-center justify-center relative overflow-hidden`}>
              {cafe.bannerUrl ? (
                <img src={cafe.bannerUrl} alt={cafe.name} className="w-full h-full object-cover" />
              ) : (
                <>
                  <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {cafe.bannerEmoji}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </>
              )}
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-gray-600 font-medium">
                {cafe.period.split('〜')[0].trim()}〜
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="mb-1">
                <h2 className="text-lg font-bold text-gray-800">{cafe.name}</h2>
                <p className="text-sm font-medium" style={{ color: cafe.themeColor }}>{cafe.subtitle}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">{cafe.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">📍 {cafe.location}</span>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: cafe.themeColorLight, color: cafe.themeColor }}
                >
                  メニューを見る →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
