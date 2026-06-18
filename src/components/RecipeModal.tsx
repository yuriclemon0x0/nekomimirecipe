import { useEffect } from 'react'
import type { FoodItem, OCColor } from '../data/ocs'

interface Props {
  food: FoodItem;
  color: OCColor;
  ocName: string;
  onClose: () => void;
}

export default function RecipeModal({ food, color, ocName, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!food.recipe) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden"
        style={{ animation: 'pop 0.3s ease both' }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="px-6 py-5 flex items-center justify-between flex-shrink-0"
          style={{ backgroundColor: color.primary }}
        >
          <div className="text-white">
            <p className="text-xs opacity-80">{ocName}のレシピ</p>
            <h2 className="text-xl font-bold">{food.emoji} {food.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div
          className="px-6 py-3 flex gap-6 flex-shrink-0"
          style={{ backgroundColor: color.veryLight }}
        >
          <div className="text-center">
            <p className="text-xs text-gray-500">調理時間</p>
            <p className="font-bold text-sm" style={{ color: color.primary }}>{food.recipe.time}</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-xs text-gray-500">分量</p>
            <p className="font-bold text-sm" style={{ color: color.primary }}>{food.recipe.servings}</p>
          </div>
        </div>

        <div className="overflow-y-auto recipe-scroll flex-1 px-6 py-5 space-y-6">
          <section>
            <h3
              className="font-bold text-sm mb-3 pb-2 border-b-2"
              style={{ color: color.primary, borderColor: color.light }}
            >
              🧂 材料
            </h3>
            <ul className="space-y-1.5">
              {food.recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color.primary }}
                  />
                  {ing}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3
              className="font-bold text-sm mb-3 pb-2 border-b-2"
              style={{ color: color.primary, borderColor: color.light }}
            >
              👩‍🍳 作り方
            </h3>
            <ol className="space-y-3">
              {food.recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: color.primary, color: color.textOnPrimary }}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="px-6 pb-6 pt-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl font-medium text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: color.light, color: color.primary }}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
}
